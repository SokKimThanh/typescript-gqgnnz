
function getListObjectWithParams(table: string, cm: string, dt: string) {
    $http.post(table, cm, dt).then(function (response: Response) {
        return response;
    }
}
interface ApartmentSalesStatus {
    apartment_sales_status_id: number,
}
interface TypeOfAction {
    pressOk: boolean,
    firstLoadingPage: boolean,
}
interface RequestUrl {
    table: string,
    cm: string,
    dt: string,
}
interface Response {
    error: number,
    dt: object,
    message: string,
}

function add(request_url: RequestUrl): void {
    if (check_request_url(request_url)) {
        getListObjectWithParams(request_url.table, request_url.cm, request_url.dt).then(function success(response: Response) {
            if (response.error === 0) {
                close();
            } else {
                throw new Error("Error add" + response.message)
            }
        }, function error(response: Response) {
            console.log("error_response", response.message)
        })
    }
}
function update(request_url: RequestUrl): void {
    if (check_request_url(request_url)) {
        getListObjectWithParams(request_url.table, request_url.cm, request_url.dt).then(function success(response: Response): void {
            if (response.error === 0) {
                close();
            } else {
                throw new Error("Error update" + response.message)
            }
        }, function error(response: Response) {
            console.log("error_response", response.message)
        })
    }
}

function detail(request_url: RequestUrl, type_of_action: TypeOfAction): void {
    getListObjectWithParams(request_url.table, request_url.cm, request_url.dt).then(function success(response: Response): void {
        if (response.error === 0) {
            if (type_of_action.firstLoadingPage) {
                firstLoadingPage(response)
            } else {
                //update. Config model to save
                request_url = {
                    table: "apartment_sales_status",
                    cm: "update",
                    dt: JSON.stringify({
                        "apartment_sales_status": { "apartment_sales_status_id": 0 },
                        "company": { company_id: 100 },
                        "languages": { language_id: 'vi' }
                    })
                }
                update(request_url)
            }
        } else {
            if (type_of_action.firstLoadingPage) {
                firstLoadingPage(response)
            } else {
                //add. Config model to show
                request_url = {
                    table: "apartment_sales_status",
                    cm: "add",
                    dt: JSON.stringify({
                        "apartment_sales_status": { "apartment_sales_status_id": 10000 },
                        "company": { company_id: 100 },
                        "languages": { language_id: 'vi' }
                    })
                }
                add(request_url);
            }
        }
    }, function error(response: Response) {
        console.log("error_response", response.message)
    })
}
function check_request_url(request_url: RequestUrl) {
    var dt = JSON.parse(request_url.dt).apartment_sales_status;
    if (dt.apartment_sales_status_id) {
        //show error log
        console.error("no_data apartment_sales_status_id")
        return false;
    } else {
        return true;
    }
}
function firstLoadingPage(response: Response) {
    $scope.it = response.dt;
}
let request_url_detail = {
    table: "apartment_sales_status",
    cm: "detai",
    dt: JSON.stringify({
        "apartment_sales_status": { "apartment_sales_status_id": 10000 },
        "company": { company_id: 100 },
        "languages": { language_id: 'vi' }
    })
}
let type_of_action = {
    pressOk: false,
    firstLoadingPage: true
}
$scope.ok = function () {
    type_of_action = {
        pressOk: true,
        firstLoadingPage: false,
    }
    detail(request_url_detail, type_of_action);
}

detail(request_url_detail, type_of_action);