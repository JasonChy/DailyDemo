$(function () {
  // 初始化任务表格
  var Grid = BUI.Grid,
      Store = BUI.Data.Store,
      columns = [
        {title: '角色id', dataIndex: 'id', sortable: false, width: 40, elCls: 'center'},
        {title: '角色名', dataIndex: 'roleName', sortable: false, width: 40, elCls: 'center'},
        {title: '角色码', dataIndex: 'roleCode', sortable: false, width: 40, elCls: 'center'},
        {title: '角色描述', dataIndex: 'roleDesc', sortable: false, width: 60, elCls: 'center'},
        {
          title: '操作', width: 120, dataIndex: 'id', elCls: 'center',
          renderer: function (value, obj) {
            var delRole = '<a href="javascript:void(0)" class="grid-command roleDelete">删除</a>';
            var updateRole = '<a href="javascript:void(0)" class="grid-command roleUpdate">编辑</a>';
            var relPrivilege = '<a href="/platform/role/relPrivilege.htm?roleId=' + obj.id + '" class="grid-command roleRelPrivilege">关联权限</a>';
            var operateEvt = updateRole + "&nbsp;&nbsp;" + delRole + "&nbsp;&nbsp;" + relPrivilege;
            return operateEvt;
          }
        }
      ];
  store = new Store({
    url: $("#btnSearch").data("url"),
    autoLoad: true,
    pageSize: 20,
    proxy: {
      method: 'post',
      dataType: 'json'
    },
    params: {
      start: 0,
      roleName: $("#roleName").val()
    },
    listeners: {
      beforeprocessload: function (e) {

      }

    }
  }),
      grid = new Grid.Grid({
        render: '#grid',
        loadMask: true,
        forceFit: true,
        columns: columns,
        store: store,
        // 顶部工具栏
        bbar: {
          //items 也可以在此配置
          // pagingBar:表明包含分页栏
          pagingBar: true
        }
      });
  grid.render();

  //没有数据，处理分页栏
  if (!store.getTotalCount()) {
    $('#grid #totalPage').text("共 0 页");
    $('#grid .bui-pb-page').val("0");
    $('#grid #totalCount').text("共0条记录");
  }

  //创建表单，表单中的日历，不需要单独初始化
  var form = new BUI.Form.HForm({
    srcNode: '#searchForm'
  }).render();


  form.on('beforesubmit', function (ev) {
    //序列化成对象
    var obj = form.serializeToObject();
    // obj.start = 0; //返回第一页
    var page = $('#grid .bui-pb-page').val();
    obj.pageIndex = page - 1;
    store.load(obj);
    return false;
  });


  //新增用户
  BUI.use(['bui/overlay', 'bui/form'], function (Overlay, Form) {
    var form = new Form.HForm({
      srcNode: '#addPlatformRoleform'
    }).render();
    var dialog = new Overlay.Dialog({
      title: '新增角色',
      width: 500,
      height: 400,
      //配置DOM容器的编号
      contentId: 'addPlatformRoleDiv',
      success: function () {
        var roleName = $("#a_roleName").val();
        var roleCode = $("#roleCode").val();
        var roleDesc = $("#roleDesc").val();
        var memo = $("#memo").val();

        var roleScope = '/';
        $('input[name="roleScope"]:checked').each(function () {
          roleScope = roleScope + $(this).val() + '/';
        })
        console.log(roleScope);

        if (roleName == undefined || roleName == "") {
          BUI.Message.Alert('角色名必填', 'info');
          return false;
        }
        if (roleCode == undefined || roleCode == "") {
          BUI.Message.Alert('角色码必填', 'info');
          return false;
        }
        if (roleScope == undefined || roleScope == "/") {
          BUI.Message.Alert('角色适用范围为必填', 'info');
          return false;
        }

        $.ajax({
          url: 'addPlatformRoleAjax.json',
          dataType: "json",
          data: {
            roleName: roleName,
            roleCode: roleCode,
            roleDesc: roleDesc,
            roleScope: roleScope,
            memo: memo
          },
          type: "POST",
          async: false,
          error: function (e) {
            BUI.Message.Alert('新增失败', 'error');
          },
          success: function (data) {
            if (data.message == "success") {
              BUI.Message.Alert('新增成功', 'info');
              setTimeout(function () {
                window.location.reload();
              }, 2000);
            } else {
              BUI.Message.Alert('新增角色失败', 'info');
            }
          }
        });
        this.close();
      }
    });

    $('#addPlatformRole').on('click', function () {

      $("#a_roleName").val("");
      $("#roleCode").val("");
      $("#roleDesc").val("");
      $('input[name="roleScope"]').each(function () {
        $(this).removeAttr("checked");
      })
      dialog.show();

    });

  });


  //编辑角色信息
  grid.on('cellclick', function (ev) {
    var obj = this;
    var record = ev.record, //点击行的记录
        field = ev.field, //点击对应列的dataIndex
        target = $(ev.domTarget); //点击的元素
    var roleDesc = record.roleDesc ? record.roleDesc : "";
    var roleCode = record.roleCode ? record.roleCode : "";
    var roleScope = record.roleScope ? record.roleScope : "";
    /*var roleScope0 = "";
     var roleScope2 ="";
     var roleScope3 ="";
     var roleScopeArray = roleScope.split('/');
     for(i=1;i<roleScopeArray.length-1;i++){
     // alert( roleScopeArray[i] );
     if(roleScopeArray[i] == "0"){
     roleScope0 = "checked";
     alert(1111);
     }
     if(roleScopeArray[i] == "2"){
     roleScope2 = "checked";
     }
     if(roleScopeArray[i] =="3" ){
     roleScope3 = "checked";
     }
     }*/

    //用户信息
    if (target.hasClass('roleUpdate')) {
      /*var msg = '<input type="hidden" name="id" id="id" value="'+record.id+'" style="width:100px;"/>'+
       '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;"><font color="#FF0000">*角色名：</font></span><input type="text" name="b_roleName" id="b_roleName" value="'+record.roleName+'" style="width:150px;"/></div>'+
       '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;"><font color="#FF0000">*角色码：</font></span><input type="text" name="b_roleCode" id="b_roleCode" value="'+roleCode+'" style="width:150px;"/></div>'+
       '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;">角色描述：</span><input type="text" name="b_roleDesc" id="b_roleDesc" value="'+roleDesc+'" style="width:150px;"/></div>'+
       '<div style="text-align: center; margin-top: 10px"><div class="controls"><label class="control-label">角色适用公司：</label>' +
       '<label><input name="roleScope2" type="checkbox" '+ roleScope3 + ' value="3"/>小贷公司 </label>' +
       '<label><input name="roleScope2" type="checkbox" '+ roleScope0 + ' value="0"/>担保机构 </label>'+
       '<label><input name="roleScope2" type="checkbox" '+ roleScope2 + ' value="2"/>代还机构 </label></div></div>';*/

      var msg = '<input type="hidden" name="id" id="id" value="' + record.id + '" style="width:100px;"/>' +
          '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;"><font color="#FF0000">*角色名：</font></span><input type="text" name="b_roleName" id="b_roleName" value="' + record.roleName + '" style="width:150px;"/></div>' +
          '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;"><font color="#FF0000">*角色码：</font></span><input type="text" name="b_roleCode" id="b_roleCode" value="' + roleCode + '" style="width:150px;"/></div>' +
          '<div style="margin-left: 20px;margin-top:10px;"><span style="display:inline-block;width:120px;text-align:right;">角色描述：</span><input type="text" name="b_roleDesc" id="b_roleDesc" value="' + roleDesc + '" style="width:150px;"/></div>' +
          '<div style="text-align: center; margin-top: 10px"><div class="controls"><label class="control-label">角色适用公司：</label>' +
          '<label><input name="roleScope2" type="checkbox" value="3"/>小贷公司 </label>' +
          '<label><input name="roleScope2" type="checkbox" value="0"/>担保机构 </label>' +
          '<label><input name="roleScope2" type="checkbox" value="2"/>代还机构 </label></div></div>';

      var Overlay = BUI.Overlay;
      var dialog = new Overlay.Dialog({
        title: '编辑角色信息',
        width: 450,
        height: 250,
        bodyContent: msg,
        buttons: [{
          text: '确定',
          elCls: 'button button-primary',
          handler: function () {
            var obj = this;
            var id = $("#id").val() ? $("#id").val() : "";
            var roleName = $("#b_roleName").val() ? $("#b_roleName").val() : "";
            var roleDesc = $("#b_roleDesc").val() ? $("#b_roleDesc").val() : "";
            var roleCode = $("#b_roleCode").val() ? $("#b_roleCode").val() : "";
            var roleScope = '/';
            $('input[name="roleScope2"]:checked').each(function () {
              roleScope = roleScope + $(this).val() + '/';
            })
            if (roleName == undefined || roleName == "") {
              BUI.Message.Alert('角色名必填', 'info');
              return false;
            }
            if (roleCode == undefined || roleCode == "") {
              BUI.Message.Alert('角色码必填', 'info');
              return false;
            }
            if (roleScope == undefined || roleScope == "/") {
              BUI.Message.Alert('角色适用范围为必填', 'info');
              return false;
            }
            //do some thing
            $.ajax({
              url: 'addPlatformRoleAjax.json',
              dataType: "json",
              data: {
                id: id,
                roleName: roleName,
                roleDesc: roleDesc,
                roleCode: roleCode,
                roleScope: roleScope,
              },
              type: "POST",
              error: function (e) {
                BUI.Message.Alert('修改失败', 'error');
                obj.destroy();
              },
              success: function (data) {
                if (data.message == "success") {
                  BUI.Message.Alert('修改角色成功', 'info');
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                } else {
                  BUI.Message.Alert('修改角色异常', 'info');
                }
                obj.destroy();
              }
            });
          }
        },
          {
            text: '取消',
            elCls: 'button',
            handler: function () {
              this.destroy();
            }
          }]
      });

      dialog.show();

      var roleScopeArray = roleScope.split('/');
      var checkboxInput = $('input[name="roleScope2"]');
      for (i = 1; i < roleScopeArray.length - 1; i++) {
        $('input[name="roleScope2"]').each(function () {
          if ($(this).val() == roleScopeArray[i]) {
            $(this).attr("checked", true);
          }
        })
      }
    }
  });


  //删除用户
  grid.on('cellclick', function (ev) {
    var obj = this;
    var record = ev.record, //点击行的记录
        field = ev.field, //点击对应列的dataIndex
        target = $(ev.domTarget); //点击的元素

    var id = record.id;
    var msg = '<input type="hidden" name="id" id="id" value="' + record.id + '" style="width:100px;"/>确定要删除该角色吗？';
    if (target.hasClass('roleDelete')) {
      var Overlay = BUI.Overlay;
      var dialog = new Overlay.Dialog({
        title: '删除角色',
        width: 300,
        height: 200,
        bodyContent: msg,
        buttons: [{
          text: '确定',
          elCls: 'button button-primary',
          handler: function () {
            var obj = this;
            var id = $("#id").val() ? $("#id").val() : "";
            //do some thing
            $.ajax({
              url: 'deleteRoleAjax.json',
              dataType: "json",
              data: {
                id: id
              },
              type: "POST",
              error: function (e) {
                BUI.Message.Alert('删除失败', 'error');
                obj.destroy();
              },
              success: function (data) {
                if (data.message == "success") {
                  BUI.Message.Alert('删除成功', 'info');
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                } else {
                  BUI.Message.Alert('删除失败', 'info');
                }
                obj.destroy();
              }
            });
          }
        }, {
          text: '取消',
          elCls: 'button',
          handler: function () {
            this.destroy();
          }
        }]
      });
      dialog.show();
    }
  });

});