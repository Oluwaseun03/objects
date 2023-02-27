// Question 1
function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.instagramHandle = handleOfAuthor,
    this.instagramContent = content,
    this.instagramImageLink = imageLink,
    this.numberOfViews = numberOfViews,
    this.numberOfLikes = numberOfLikes

}
   

// Question 2
let instagramPost1 = new instagramPost("@oluwaseun", "Such a beauty to behold", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F21%2F13%2F00%2Frose-165819__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&tbnid=1qkTzKv-LblCIM&vet=12ahUKEwjypYTyg7X9AhVYricCHVJVCiMQMygCegUIARDlAQ..i&docid=6QnaOLvEQovLfM&w=513&h=340&itg=1&q=images%20of%20flowers&ved=2ahUKEwjypYTyg7X9AhVYricCHVJVCiMQMygCegUIARDlAQ", 2000, 1500);
let instagramPost2 = new instagramPost("@mide_", "Delicious cookies for sale", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fcookie&psig=AOvVaw0NllqyqQRITOVunZvXCcsL&ust=1677564495614000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDZyeCEtf0CFQAAAAAdAAAAABAE", 4115,2008 );

// Question 3a
function createPerson(name, age, location) {
    return {
        studentName: name,
        studentAge: age,
        studentLocation: location
    }
};
const Musa = createPerson("Musa", 19, "Lekki, Lagos");

// Question 3b
function JambScores(ENG, GOVT, LIT, CRK) {
    return {
     ENG: ENG,
     GOVT: GOVT,
     LIT: LIT,
     CRK: CRK
    }
};

const MusaJambScores = JambScores(70, 85, 82, 94);

Musa.JambScores = MusaJambScores;
// console.log(Musa);

// Question 4
let inputOne = {lName: "Akindele", fName: "Oluwaseun", age: 23}

// (a) - Object.assign() method
let inputTwo = Object.assign({}, inputOne);  

// (b) - Spread Syntax method
let inputThree = {...inputOne};

// (c) - JSON.parse() method
let inputFour = JSON.parse(JSON.stringify(inoutOne));

inputOne.height = "5ft";

// console.log(inputFour);

// Question 5
const presidentialCandidates = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar",
};

for (const property in presidentialCandidates) {
    // for..in enumeration
    let party = property;
    let candidate = presidentialCandidates[property];

    console.log(candidate + "is the presidential candidate of" + party);
}

for (const candidate of Object.keys(presidentialCandidates)) {
    // for..of enumeration
    console.log(presidentialCandidates[candidate] + "is the presidential candidate of" + candidate);
}
