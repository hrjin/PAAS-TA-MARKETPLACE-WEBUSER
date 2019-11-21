/**
 * API call function
 * @param reqUrl      : Request URL
 * @param reqMethod   : Request Method (GET POST PUT DELETE ..)
 * @param param       : Request Parameters
 * @param preFunc     : Pre function
 * @param callback    : after function
 * @description
 * SEYA
 * async: false 동기 처리
 */
var procCallAjax = function(reqUrl, reqMethod, param, preFunc, callback) {
    console.log("procCallAjax Init");
    var reqData = "";
    if (param != null) {
        reqData = param;
    }
    $.ajax({
        url: reqUrl,
        method: reqMethod,
        data: reqData,
        dataType: 'json',
        async: false,
        contentType: "application/json",
        beforeSend: function(xhr){
            // preFunc
            // if(_csrf_header && _csrf_token) {
            //     xhr.setRequestHeader(_csrf_header, _csrf_token);
            // }
        },
        success: function(data) {
        	if (!commonUtils.isEmpty(callback)) {
                callback(data);        		
        	}
        },
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                console.log('Not connect.\n Verify Network.');
            }
            else if (jqXHR.status == 400) {
                console.log('Server understood the request, but request content was invalid. [400]');
            }
            else if (jqXHR.status == 401) {
                console.log('Unauthorized access. [401]');
            }
            else if (jqXHR.status == 403) {
                console.log('Forbidden resource can not be accessed. [403]');
            }
            else if (jqXHR.status == 404) {
                console.log('Requested page not found. [404]');
            }
            else if (jqXHR.status == 500) {
                console.log('Internal server error. [500]');
            }
            else if (jqXHR.status == 503) {
                console.log('Service unavailable. [503]');
            }
            else if (exception === 'parsererror') {
                console.log('Requested JSON parse failed. [Failed]');
            }
            else if (exception === 'timeout') {
                console.log('Time out error. [Timeout]');
            }
            else if (exception === 'abort') {
                console.log('Ajax request aborted. [Aborted]');
            }
            else {
                console.log('Uncaught Error.n' + jqXHR.responseText);
            }
        },
        complete : function(data) {
            // SKIP
            console.log("COMPLETE :: data :: ", data);
        }
    });
};


// MOVE PAGE
var procMovePage = function (pageUrl) {
    if (pageUrl === null || pageUrl.length < 1) {
        return false;
    }

    if ((!!pageUrl && typeof pageUrl === 'number') && -1 === pageUrl) {
        history.back();
    } else {
        // pageUrl = ("/" === pageUrl) ? "" : pageUrl;
        // location.href = procGetDashboardUrl() + pageUrl;
        location.href = pageUrl;
    }

};

//Format Date
var getFormatDate = function (date) {
    var year = date.getFullYear();     //yyyy
    var month = (1 + date.getMonth()); //M
    month = month >= 10 ? month : '0' + month; //month 두자리로 저장
    var day = date.getDate(); //d
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '-' + month + '-' + day;
};

var commonUtils = {
	addComma: function(num) {
		return num;
		// var regexp = /\B(?=(\d{3})+(?!\d))/g;
		// return num.toString().replace(regexp, ',');
	},
	dateValueDigit: function(value) {
    	var result = value;
        if (value < 10) {
            result = '0' + value;
        }
		return result;
    }, 
    isEmpty: function(object) {
    	if (object == undefined || object == null) {
    		return true;
    	}
    	return false;
    }, 
    isBlank: function(value) {
    	if (value == undefined || value == null || value == "") {
    		return true;
    	}
    	return false;
    },
    contains: function(contents, findString) {
    	if (this.isBlank(contents) || this.isBlank(findString)) {
    		return false;
    	}
    	return contents.includes(findString);
    }
}

/*
 * Loding View
 * http://carlosbonetti.github.io/jquery-loading/
 * */
var loading = {
	timeoutList: [],
	start: function(msg) {
		var msgValue = "LOADING...";
		
		if (!commonUtils.isBlank(msg)) {
			msgValue = msg;
		}
		
		$('body').loading({
			stoppable: false
			,theme: 'dark'
			,message: msgValue
     	});
	},
	stop: function() {
		if (!commonUtils.isEmpty(this.timeoutList) && this.timeoutList.length > 0) {
			var timeoutObj = {};
			for (var idx=0; idx<this.timeoutList.length ;idx++) {
				timeoutObj = this.timeoutList[idx];
				clearTimeout(timeoutObj);
			}
			this.timeoutList = [];
		}
		$('body').loading("stop");
	},
	interval: function(value, msg) {
		var intervalTime = 1000 * value;
		this.start(msg);
		
		this.timeoutList[this.timeoutList.length] = setTimeout(function() {
			$('body').loading('toggle');
		}, intervalTime);
	}
}

//버튼 다중 클릭 방지
var doubleSubmitFlag = false;
function doubleSubmitCheck(){
    if(doubleSubmitFlag){
        return doubleSubmitFlag;
    }else{
        doubleSubmitFlag = true;
        return false;
    }
}

// 공통 알림 Modal
var commonAlert = {
	show: function(message) {
		$("#commonAlertModal-Message").text(message);
		$("#commonAlertModal").modal("show");
	},
	hide: function() {
		$("#commonAlertModal-Message").text("");
		$("#commonAlertModal").modal("hide");
	}
}