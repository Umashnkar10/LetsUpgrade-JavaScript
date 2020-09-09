const elemsImage = document.getElementsByClassName("image");
const imageSrc = elemsImage[0].src;
function firstImage(){
    elemsImage[0].src = imageSrc;
}
function secondImage(){
    const elemsImage = document.getElementsByClassName("image");
    elemsImage[0].src = "https://www.hdwallpapers.in/thumbs/2020/kia_stinger_gt_awd_2020_4k_5k_hd_cars-t1.jpg";

}
function thirdImage(){
    const elemsImage = document.getElementsByClassName("image");
    elemsImage[0].src ="https://www.hdwallpapers.in/thumbs/2020/maserati_ghibli_trofeo_2020_4k_5k_hd_cars-t1.jpg";
}

function changeText(){
    const elemText = document.getElementsByClassName("input");
    let copyText = elemText[0].value;
    elemText[1].value = copyText;
}

let persons = [
    {
        name: 'Vijay',
        age : 25,
        country: 'India',
        hobbies: ['FootBall','Cricket','Cooking']
    },
    {
        name: 'Varun',
        age : 23,
        country: 'India',
        hobbies: ['FootBall','Cricket','PhotoGrapher']},
    {
        name: 'Surya',
        age : 21,
        country: 'USA',
        hobbies: ['Game','Cricket','Cooking']},
    {
        name: 'Sugan',
        age : 30    ,
        country: 'USA',
        hobbies: ['FootBall','Cricket','Cooking','Tennis']
    }
]
console.log('List of Person in the objects')
persons.forEach(function(person){
    console.log(`Name:${person.name}\nAge:${person.age}\nCountry:${person.country}\nHobbies:${person.hobbies}`)
})
console.log('List of Person who are all age is less than 30')
persons.forEach(function(person){
    if(person.age < 30){
        
        console.log(`Name:${person.name}\nAge:${person.age}\nCountry:${person.country}\nHobbies:${person.hobbies}`)
    }
})
console.log('List of Person who are all country is India')
persons.forEach(function(person){
    if(person.country.toLowerCase() == 'india'){
        
        console.log(`Name:${person.name}\nAge:${person.age}\nCountry:${person.country}\nHobbies:${person.hobbies}`)
    }
})