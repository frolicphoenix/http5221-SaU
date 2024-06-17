/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS

class Friend {
	constructor(name, number) {
		this.name = name;
		this.number = number;
	}
}

window.onload = function(){

	var faveThree = [];

	var formF = document.forms.fave_form;

	var f1 = new Friend(formF.name1.value, formF.phone1.value);

	var f2 = new Friend(formF.name2.value, formF.phone2.value);

	var f3 = new Friend(formF.name3.value, formF.phone3.value);

	


}//END OF onload FUNCTION