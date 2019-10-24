export {};
class HocSinh {
  dateOfBirth: string;
  constructor(dateOfBirth: string) {
    this.dateOfBirth = dateOfBirth;
  }
  happyBirthDay() {
    return this.dateOfBirth;
  }
  changeDDMMYYYY(date: string): string {
    var x = date.split("/");
    return `${x[1]}/${x[0]}/${x[2]}`;
  }
}

var newdate = "04/06/1991";
var thanhHocSinh = new HocSinh(newdate);

alert(thanhHocSinh.changeDDMMYYYY(thanhHocSinh.happyBirthDay()));
