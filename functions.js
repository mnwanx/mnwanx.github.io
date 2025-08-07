wallpaper_list = ["https://images5.alphacoders.com/862/862186.png", "https://images3.alphacoders.com/131/1316955.png"];
// alert(wallpaper_list[0]);

contact_developer = ["https://instagram.com/mnwanx", "https://github.com/mnwanx", "https://youtube.com/c/MuhammadNajwan", "https://www.linkedin.com/in/mnwanx/", "https://twitter.com/mnwanx", "https://tiktok.com/@mnwanx"];



right_click_msg = ["What r u searching 4?", "Sun goes down", "the light betrayed us", "There is no sun here", "Scream 'till silence", "I'm much 2 young 2 fall", "Die! Die! Die!", "I want ur soul!", "I want to live"];
months_list = "January, February, March, April, May, June, July, August, September, October, November, December";
day_list = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";
//self_description = '"If I could change, I would, take back the pain, I would. Retrace every wrong move that I made, I would. If I could stand up and take the blame, I would. I would take all my shame to the grave"<br>~ Linkin Park ~';
//self_description = 'Take a look to the sky just before you die!<br> It\'s the last time you will!<br> Blackened roar, massive roar fills the crumbling sky!<br> Shattered goal fills his soul with a ruthless cry! <br>~ Metallica ~';



async function get_database()   {
    try {
        const response = await fetch('/database.json');
        if (!response.ok)   {
            throw new Error("Something went wrong!");
        }
        database = await response.json();
        self_description = database["poetry"][Math.floor(Math.random() * Object.keys(database["poetry"]).length)];
    } catch(e)  {
        console.log(e);
    }
}

get_database();


function set_random_fly(){
    document.documentElement.style.setProperty("--random0-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random1-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random2-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random3-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random4-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random5-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random6-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random7-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random8-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random9-x-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random10-x-axis", Math.floor(Math.random() * 100) + "%");

    document.documentElement.style.setProperty("--random0-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random1-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random2-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random3-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random4-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random5-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random6-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random7-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random8-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random9-y-axis", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random10-y-axis", Math.floor(Math.random() * -100) + "%");



        document.documentElement.style.setProperty("--random0-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random1-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random2-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random3-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random4-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random5-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random6-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random7-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random8-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random9-x-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random10-x-axis2", Math.floor(Math.random() * 100) + "%");

    document.documentElement.style.setProperty("--random0-y-axis2", Math.floor(Math.random() * -100) + "%");
    document.documentElement.style.setProperty("--random1-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random2-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random3-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random4-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random5-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random6-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random7-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random8-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random9-y-axis2", Math.floor(Math.random() * 100) + "%");
    document.documentElement.style.setProperty("--random10-y-axis2", Math.floor(Math.random() * 100) + "%");
}


set_random_fly();
fly_interval = setInterval(set_random_fly, 30000);







function show_projects(id)  {
    // window.location.href = database["projects_list"][id];
    window.open(database["projects_list"][id]["link"], '_blank');
}

function open_tools(tool) {
    // window.location.href = database["tools_list"][tool];
    window.open(database["tools_list"][tool]["link"], '_blank');
}

function contact_me(id)   {
    // window.location.href = contact_developer[id];
    window.open(contact_developer[id], '_blank');
}
function time_formating(value)   {
    if (value < 10) {
        return "0" + value;
    }   else    {
        return value;
    }
}
function update_current_time()  {
    date = new Date();
    hour = time_formating(date.getHours());
    minute = time_formating(date.getMinutes());
    second = time_formating(date.getSeconds());
    
    today_date = time_formating(date.getDate());

    document.getElementById("display_time").innerHTML = "☠️" + hour + " : " + minute + " : " + second + "☠️";
    document.getElementById("display_date").innerHTML = "☠️" + day_list.split(",")[date.getDay()] + ", " + today_date + " " + months_list.split(",")[date.getMonth()] + " " + date.getFullYear() + "☠️";
}

setInterval(update_current_time, 1000);
typing_sfx = new Audio("assets/typing.mp3");
background_music = new Audio("assets/background_music_4.mp3");
// background_music =  new Audio("assets/background_music_2.mp3");
// var background_music = new Audio("assets/background_music.aac");

thunder_sfx = new Audio("assets/thunder.mp3");
rain_sfx = new Audio("assets/rain.mp3");
wind_sfx = new Audio("assets/rainstorm-with-wind-351117.mp3");
demonic_laughter = new Audio("assets/demonic_laughter.mp3");
demonic_scream = new Audio("assets/demonic_scream.mp3");

right_click_sfx = [demonic_laughter, demonic_scream];


async function show_description()   {
    typing_sfx.play();
    thunder_sfx.play();
    
    description = document.getElementById("self_description");
    for (i = 0; i < self_description.length; i++)   {
        typing_rest = Math.floor(Math.random() * 100);
        console.log(typing_rest);
        description.innerHTML += self_description[i] + " _";
        await new Promise(sleep => setTimeout(sleep, 35));
        description.innerHTML = description.innerHTML.replace(" _", "");
        //await new Promise(sleep => setTimeout(sleep, typing_rest));
        
    }
    description.innerHTML = self_description + "<text id='blinking_cursor'> _</text>";
    document.getElementById("blinking_cursor") . style . animation = "cursor_blink 1s step-start 0s infinite";
    typing_sfx.pause();
    wind_sfx.play();
    background_music.play();
    animate();
    rain_sfx.play();
    // animate();
    
}

function pro_mode() {
    window.location.href = "/pro";
}
function close_msg_box()    {
    document.getElementById("msg_box").remove();
    background_music.loop = true;
    thunder_sfx.loop = true;
    rain_sfx.loop = true;
    wind_sfx.loop = true
    show_description();
    // try {
    //     background_music.play()
    // }   catch (e)   {
    //     background_music.src = "assets/background_music_2.mp3";
    //     background_music.play();
    // }
    
}

msg_shown = false;

function show_helper(msg_text)  {
    msg = document.getElementById("msg") . innerHTML = msg_text;
    msg_shown = !msg_shown;
}


function onload_functions()  {
    date = new Date();
    // show_description();
    // document.getElementById("age") . innerHTML = (date.getFullYear() - 2003) + " y/o";
    document.getElementById("info_header") . innerHTML = "Code, " + (date.getFullYear() - 2003);
    target = document.getElementById("projects");
    head = document.createElement("h2");
    head.id = "info_header";
    node = document.createTextNode("Projects (More on GitHub)");
    head.appendChild(node);
    head.setAttribute("onclick", "show_projects('GitHub')");
    target.appendChild(head);

    for (i = Object.keys(database["projects_list"]).length - 1; i > 0; i--)  {
        para = document.createElement("p");
        node = document.createTextNode(Object.keys(database["projects_list"])[i]);
        para.setAttribute("onclick", "show_projects('" + Object.keys(database["projects_list"])[i] + "')");
    para.appendChild(node);
    target.appendChild(para);
    }
    target = document.getElementById("tools");
    for (i = Object.keys(database["tools_list"]).length - 1; i >= 0; i--)   {
        para = document.createElement("p");
        node = document.createTextNode(Object.keys(database["tools_list"])[i]);
        para.setAttribute("onclick", "open_tools('"+ Object.keys(database["tools_list"])[i] +"')")
        para.appendChild(node);
        target.appendChild(para);
    }
    var cursorOffset = {
        left : -30
      , top  : 50,
      
     }
     
    //  msg_shown = false;
     
     document.getElementById("html").addEventListener("mousemove", function (e) {
    var $cursor = document.getElementById('cursor');

    projects_hover = document.getElementById("projects");
    profile_hover = document.getElementById("profile");
    social_hover = document.getElementById("contact_developer_id");
    icons_hover = document.getElementById("icons");
    tools_hover = document.getElementById("tools");
    time_hover = document.getElementById("display_time");
    date_hover = document.getElementById("display_date");
    death_bat_hover = document.getElementById("flying_bat");
    death_bat_reverse_hover = document.getElementById("flying_bat_reverse");

    door_hover = document.getElementById("exit-door");


       $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
       $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';
       msg = document.createElement("p");
       msg.setAttribute("id", "msg");
       msg.setAttribute("style", "width:100%; left: "+ 120 +"px; top: "+ 0+"px; opacity:1; font-size: 25px; font-family: 'Old London', system-ui; font-style: bold;");

       window.addEventListener('contextmenu', function(right_click)   {
        
        right_click.preventDefault();
        $cursor.appendChild(msg);
        right_click_sfx[Math.floor(Math.random() * 2)].play();
        show_helper(right_click_msg[Math.floor(Math.random() * right_click_msg.length)]);
     });

       if (projects_hover.matches(':hover'))    {
        // node = document.createTextNode("Click one of those to see the project");
        document.querySelector("#flying_bat") . style . zIndex = 0
        document.querySelector("#flying_bat_reverse") . style . zIndex = 0;
        msg.appendChild(node);
        
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            show_helper("Click one of these to see the project!");
            // msg_shown = !msg_shown;
        } 
       }    else if (profile_hover.matches(':hover'))   {
        document.querySelector("#flying_bat") . style . zIndex = 0
        document.querySelector("#flying_bat_reverse") . style . zIndex = 0;
        // node = document.createTextNode("Get to know me");
        msg.appendChild(node);
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            // show_helper("Get to know me 👻");
            show_helper("Find all " + (right_click_msg.length + 6) + " hidden msg");
            demonic_scream.play();
            // show_helper(right_click_msg[Math.floor(Math.random() * right_click_msg.length)]);
            // msg_shown = !msg_shown;
        } 
       } else if (death_bat_hover.matches(':hover'))   {
        // node = document.createTextNode("Get to know me");
        msg.appendChild(node);
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            // show_helper("Get to know me 👻");
            show_helper("AAARGHHH!");
            demonic_scream.play();
            // show_helper(right_click_msg[Math.floor(Math.random() * right_click_msg.length)]);
            // msg_shown = !msg_shown;
        } 
       } else if (death_bat_reverse_hover.matches(':hover'))   {
        // node = document.createTextNode("Get to know me");
        msg.appendChild(node);
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            // show_helper("Get to know me 👻");
            show_helper("HA! HA! HA!");
            demonic_laughter.play();
            // show_helper(right_click_msg[Math.floor(Math.random() * right_click_msg.length)]);
            // msg_shown = !msg_shown;
        } 
       } else if (social_hover.matches(':hover'))    {
        
        node = document.createTextNode("Contact me!");
        // msg.appendChild(node);
        if (!msg_shown) {
            $cursor.appendChild(msg);
            show_helper("Contact me!");
            // msg_shown = !msg_shown;
        } 
       } else if (tools_hover.matches(':hover')) {

        document.querySelector("#flying_bat") . style . zIndex = 0
        document.querySelector("#flying_bat_reverse") . style . zIndex = 0;
        node = document.createTextNode("Wanna get some help? Use my tool!");
        // msg.appendChild(node);

        if (!msg_shown) {
            $cursor.appendChild(msg);
            show_helper("Wanna get some help? Use my tool!");
            // msg_shown = !msg_shown;
        }
       } else if (time_hover.matches(':hover')) {
            if (!msg_shown) {
                $cursor.appendChild(msg);
                show_helper("Counting to your death? <br> HA HA HA");
                demonic_laughter.play();
            }
       } else if (date_hover.matches(':hover')) {
        if (!msg_shown) {
            $cursor.appendChild(msg);
            show_helper("Date of Death !");
        }
   } else if (door_hover.matches(':hover')) {
    if (!msg_shown) {
        $cursor.appendChild(msg);
        show_helper("Exit Night");
    }
   } else   {
        close_msg();
    }
     
     });
     function close_msg()   {
        try {
            document.querySelector("#flying_bat") . style . zIndex = 3;
        document.querySelector("#flying_bat_reverse") . style . zIndex = 3;
            // document.getElementById("msg").innerHTML = "";
            document.getElementById("msg").remove();
            msg_shown = !msg_shown;
        }   catch(e)    {
            console.log(e);
        }
        // closing_msg = !closing_msg;
       
     }
     target = document.getElementById("html");
     box = document.createElement("div");
     box.setAttribute("id", "msg_box");
     node = document.createTextNode("Welcome!");
     box.appendChild(node);
     node = document.createTextNode("Please use desktop or laptop for a better experience!");
     box.appendChild(document.createElement("br"));
     box.appendChild(node);

     close_button = document.createElement("button");
     close_button.setAttribute("onclick", "close_msg_box()");
     node = document.createTextNode("Pure Art");
     close_button.appendChild(node);
    //  box.appendChild(document.createElement("br"));
     box.appendChild(close_button);

     pro_mode_button = document.createElement("button");
     pro_mode_button.setAttribute("onclick", "pro_mode()");
     node2 = document.createTextNode("Professional Mode");
     pro_mode_button.appendChild(node2);
    //  box.appendChild(document.createElement("br"));
     box.appendChild(pro_mode_button);

     target.appendChild(box);
     
    //  background_music.play();
}
