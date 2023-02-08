//console.log('I\'m Alive!');

//Sound Manager object to hold all sounds for the project -- Autoplay is default to true -- loop set to false to prevent it from looping
var sound = {
    fire: new Howl({
        src: ['./Sounds/Fireball.mp3'],
        autoplay: false,
        loop: false

    }),

    ice: new Howl({
        src: ['./Sounds/ice-magic.ogg'],
        autoplay: false,
        loop: false

    }),

    light: new Howl({
        src: ['./Sounds/thunder.mp3'],
        autoplay: false,
        loop: false

    }),

    wind: new Howl({
        src: ['./Sounds/wind-cut.mp3'],
        autoplay: false,
        loop: false

    })

};

//console.log($playButton);

//Fire Based Parameters
//Establish fire image and button
const $fireBall = $('#fireSpell');
const $fireButton = $('#fire');

//setting initial class for spells to hidden
$fireBall.addClass('hidden');

//Event when fire button is activated
$fireButton.click(() => {
    //console.log('I\'m Alive!');
    sound.fire.play();
    showFire();
});

//Fire image display class switched. ******Remember to identify the display css to make this work******
function showFire() {
    console.log('Fire Magic');
    $fireBall.removeClass("hidden");
    $fireBall.addClass("unhidden");
    setTimeout(() => {
        //console.log('Change Class Now');
        $fireBall.addClass("hidden");
        $fireBall.removeClass("unhidden");
    }, 5000);
}

//Ice Based Parameters
const $iceBolt = $('#iceSpell');
const $iceButton = $('#ice');

$iceBolt.addClass('hidden');

$iceButton.click(() => {
    //console.log('I\'m Alive!');
    sound.ice.play();
    showIce();
});

function showIce() {
    console.log('Ice Magic');
    $iceBolt.removeClass("hidden");
    $iceBolt.addClass("unhidden");
    setTimeout(() => {
        //console.log('Change Class Now');
        $iceBolt.addClass("hidden");
        $iceBolt.removeClass("unhidden");
    }, 5000);
}


//Lightning Based Parameters
const $lightning = $('#lightSpell');
const $lightButton = $('#lightning');

$lightning.addClass('hidden');

$lightButton.click(() => {
    //console.log('I\'m Alive!');
    sound.light.play();
    showLightning();
});

function showLightning() {
    console.log('Lightning Magic');
    $lightning.removeClass("hidden");
    $lightning.addClass("unhidden");
    setTimeout(() => {
        //console.log('Change Class Now');
        $lightning.addClass("hidden");
        $lightning.removeClass("unhidden");
    }, 5000);
}

//Wind Based Parameters
const $wind = $('#windSpell');
const $windButton = $('#wind');

$wind.addClass('hidden');

$windButton.click(() => {
    //console.log('I\'m Alive!');
    sound.wind.play();
    showHurricane();
});

function showHurricane() {
    console.log('Wind Magic');
    $wind.removeClass("hidden");
    $wind.addClass("unhidden");
    setTimeout(() => {
        //console.log('Change Class Now');
        $wind.addClass("hidden");
        $wind.removeClass("unhidden");
    }, 10000);
}