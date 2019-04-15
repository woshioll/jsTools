function getUrlParam(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}
//��ҳ
var dataObj = {
	page_enterprise: 1,
	limit_enterprise: 10,
}
//��ַ
var baseUrl = "http://111.111.111.111:8080(xxxx)/balabala/balabala";
var userName = GetlocalStorage('userName');
var DepartmentName = GetlocalStorage('departmentName');
var tokens = GetlocalStorage('tokens');

function getUrl(url) {
	return baseUrl + url + (url != '/login' ? "?access_token=" + tokens : '');
}

function PostAjax(url, datas, callback) {
	$.ajax({
		type: 'POST',
		url: getUrl(url),
		data: datas,
		dataType: "json",
		crossDomain: true,
		success: function (data) {
			var code = data.code;
			if (code == 3003) {
				top.window.location.href = "login.html?Readm=" + Math.random();
				return;
			}
			callback(data);
		},
		error: function (xhr) {
			closeLogding();
			if (xhr.status == 403) {
				top.window.location.href = "login.html?Readm=" + Math.random();
			} else {
				layer.msg('���ݼ���ʧ��~', {
					icon: 2
				});
				error(xhr, textStatus, errorThrown);

			}
		}
	});
}

function PostJSON(url, datas, callback) {
	$.ajax({
		type: 'POST',
		url: getUrl(url),
		data: JSON.stringify(datas),
		contentType: "application/json;charset=utf-8",
		dataType: "json",
		crossDomain: true,
		success: function (data) {
			var code = data.code;
			if (code == 3003) {
				top.window.location.href = "login.html?Readm=" + Math.random();
				return;
			}
			callback(data);
		},
		error: function (xhr) {
			closeLogding();
			if (xhr.status == 403) {
				top.window.location.href = "login.html?Readm=" + Math.random();
			} else {
				layer.msg('���ݼ���ʧ��~', {
					icon: 2
				});
				error(xhr, textStatus, errorThrown);
			}
		}
	});
}

function GetAjax(url, datas, callback) {
	$.ajax({
		type: 'GET',
		url: getUrl(url),
		data: datas,
		dataType: "json",
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		success: function (data) {
			var code = data.code;
			if (code == 3003) {
				top.window.location.href = "login.html?Readm=" + Math.random();
				return;
			}
			callback(data);
		},
		error: function (xhr) {
			closeLogding();
			if (xhr.status == 403) {
				top.window.location.href = "login.html?Readm=" + Math.random();
			} else {
				layer.msg('���ݼ���ʧ��~', {
					icon: 2
				});
				error(xhr, textStatus, errorThrown);
			}
		}
	});
}
var logs = true;

function loges(vals) {
	if (logs == true) {
		return console.log(vals);
	} else {
		return "";
	}
}

function GetlocalStorage(key) {
	var value = localStorage[key];
	if (value != undefined && value != null) {
		return value;
	} else {
		return "";
	}
}

function SetlocalStorage(key, value) {
	localStorage.setItem(key, value);
}

function RemovelocalStorage(key) {
	localStorage.removeItem(key);
}
//nullת��
function _replaceNull(data) {
	data = JSON.stringify(data);
	var newRegExp = new RegExp('null', "g");
	return data.replace(newRegExp, "\"-\"");
}
//��ѡ��
function onCheckboxClick(obj) {
	if ($(obj).hasClass("layui-form-checked")) {
		$(obj).removeClass('layui-form-checked');
	} else {
		$(obj).addClass('layui-form-checked');
	}
}

function CheckBox(obj) {
	if ($(obj).hasClass("layui-form-checked")) {
		$(obj).removeClass('layui-form-checked');
		$(obj).parents().siblings().find('.layui-form-checkbox').removeClass('layui-form-checked');
	} else {
		$(obj).addClass('layui-form-checked');
		$(obj).parents().siblings().find('.layui-form-checkbox').addClass('layui-form-checked');
	}
};
//ȫѡ�뷴ѡ
function onchecked(obj) {
	if (obj.checked) {
		$(obj).parent().siblings().find('.check input').prop('checked', 'checked');
	} else {
		$(obj).parent().siblings().find('.check input').removeAttr('checked');
	}
}
//�˳�
function Exit() {
	layer.confirm('�Ƿ�ȷ���˳�ϵͳ��', {
			btn: ['��', '��'], //��ť
			icon: 2,
		},
		function () {
			RemovelocalStorage('userName');
			RemovelocalStorage('userid');
			RemovelocalStorage('tokens');
			location.href = "login.html?Readm=" + Math.random();

		});
};
//�޸�����
function ChangePassword(){
	x_admin_show('�޸�����','Password.html',460,240);
}
// �޸���Ϣ
function Changeinfor() {
	x_admin_show('�޸���Ϣ','changeinfo.html',500,280);
}
//ˢ��
function Refresh() {
	window.location.reload();
}
//����ѡ��
$(".layui-form-select").click(function () {
	if ($(this).hasClass("layui-form-selected")) {
		$(this).removeClass('layui-form-selected');
	} else {
		$(this).addClass('layui-form-selected');
	}
})

function selectlist() {
	$(".layui-form-select").bind("input propertychange", function () {
		if ($(this).hasClass("layui-form-selected")) {
			$(this).removeClass('layui-form-selected');
		} else {
			$(this).addClass('layui-form-selected');
		}
	})
}
//����������״̬
var WO_STATUS_TOAUDIT = 0;
var WO_STATUS_AUDIT = 1;
var WO_STATUS_PRODUCTING = 2;
var WO_STATUS_FINISHED = 3;
var WO_STATUS_STOP = 4;
var WO_STATUS_AUDIT_FAILED = 5;

function getWorkOrderStatus(status) {
	switch (status) {
		case WO_STATUS_TOAUDIT:
			return '�����';
		case WO_STATUS_AUDIT:
			return '�����';
		case WO_STATUS_PRODUCTING:
			return '������';
		case WO_STATUS_FINISHED:
			return '�ѽ���';
		case WO_STATUS_STOP:
			return '����ֹ';
		case WO_STATUS_AUDIT_FAILED:
			return '���δͨ��';
	}
}

function getWorkOrderStatusWithStyle(status) {
	switch (status) {
		case WO_STATUS_TOAUDIT:
			return '<a class="layui-btn layui-btn-xs  layui-btn-primary">�����</a>';
		case WO_STATUS_AUDIT:
			return '<a class="layui-btn layui-btn-xs layui-btn-normal">�����</a>';
		case WO_STATUS_PRODUCTING:
			return '<a class="layui-btn layui-btn-xs">������</a>';
		case WO_STATUS_FINISHED:
			return '<a class="layui-btn layui-btn-xs bg-c">�ѽ���</a>';
		case WO_STATUS_STOP:
			return '<a class="layui-btn layui-btn-xs layui-btn-danger">����ֹ</a>';
		case WO_STATUS_AUDIT_FAILED:
			return '<a class="layui-btn layui-btn-xs layui-btn-warm">���δͨ��</a>';
	}
}
//�����ƻ�״̬
var STATUS_FAILED = 1;
var STATUS_CREATING = 2;
var STATUS_PENDING_COMMIT = 3;
var STATUS_PENDING_AUDIT = 4;
var STATUS_PENDING_APPROVAL = 5;
var STATUS_APPROVAL = 6;

function getProductionPlanStatus(status) {
	switch (status) {
		case STATUS_FAILED:
			return '<a class="layui-btn layui-btn-xs bg-c">δͨ��</a>';
		case STATUS_CREATING:
			return '<a class="layui-btn layui-btn-xs layui-btn-primary">������</a>';
		case STATUS_PENDING_COMMIT:
			return '<a class="layui-btn layui-btn-xs layui-btn-normal">���ύ</a>';
		case STATUS_PENDING_AUDIT:
			return '<a class="layui-btn layui-btn-xs">�����</a>';
		case STATUS_PENDING_APPROVAL:
			return '<a class="layui-btn layui-btn-xs layui-btn-warm">����׼</a>';
		case STATUS_APPROVAL:
			return '<a class="layui-btn layui-btn-xs layui-btn-warm">����׼</a>';
	}
}