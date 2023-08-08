let i = 0;
let a = 0;
let Check = false;
const banner = document.getElementsByClassName("banner");
const banner_height = document.getElementsByClassName("banner")[0].clientHeight - 80;
const addToCart = document.getElementsByClassName("product_box_buttons_wraper");
const login_cart = document.getElementsByClassName("li_header");
const bars_wraper = document.getElementById("bars");
const header = document.getElementById("header");
const ResponsivMmenu = document.getElementsByClassName("responsive_menu");
const bars = document.getElementsByClassName("bar_2_3");
const icons = document.getElementsByClassName("icons_header");
const height = window.scrollTop;
const Contact_us_block_height = document.getElementsByClassName("Contact_us_block")[0].clientHeight;
var height_contact_block = 0 - Contact_us_block_height / 2;
const dropdown_options_wraper = document.getElementsByClassName("drop_down_menu")[0];
const button_dropdwon = document.getElementsByClassName("button_dropdown")[0];
const text = document.getElementById("form_main_text");
const form = document.getElementsByClassName("form_contact_us")[0];
const button_send = document.getElementsByClassName("send_button_contact_us")[0];
const email_value = document.getElementById("email");
const name = document.getElementById("your_name");
const product_box = document.getElementsByClassName("product_box");
const invalidCharacters = [
    " ",
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "*",
    "+",
    "=",
    ",",
    "/",
    ":",
    ";",
    "<",
    ">",
    "?",
    "[",
    "]",
    "\\",
    "^",
    "`",
    "{",
    "}",
    "|",
    "~",
    '"',
    "'"
  ];
let scroll = 0;





