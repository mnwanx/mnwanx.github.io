wallpaper_list = ["https://images5.alphacoders.com/862/862186.png", "https://images3.alphacoders.com/131/1316955.png"];
// alert(wallpaper_list[0]);

contact_developer = ["https://instagram.com/mnwanx", "https://github.com/mnwanx", "https://youtube.com/c/MuhammadNajwan", "https://www.linkedin.com/in/mnwanx/", "https://twitter.com/mnwanx", "https://tiktok.com/@mnwanx"];
// projects_list = {
//     "GitHub":"https://github.com/mnwanx",
//     "Music Streaming App":"https://streameo.onrender.com",
//     "Natural Hazard Web App":"https://mnwanx.github.io/natural_hazard",
//     "Natural Hazard backend API":"https://natural-hazard-forecast.onrender.com",
//     "Mosque Location Finder API":"https://masjid.onrender.com",
//     "Smart Farming System (IOT)":"https://vt.tiktok.com/ZSYtbTQbQ/",
//     "Smart Home System (IOT)":"https://vt.tiktok.com/ZSYtbw5P2/",
//     "Restaurant System (IOT + web app + server)": "https://vt.tiktok.com/ZSYt7oQKV/",
//     "Hand Gesture (Python + OpenCV)":"assets/hand_gesture_project.mp4"
// };

projects_list = {
    "GitHub":"https://github.com/mnwanx",
    "Music Streaming App":"https://streameo.onrender.com",
    "Natural Hazard Web App":"https://mnwanx.github.io/natural_hazard",
    "Natural Hazard backend API":"https://natural-hazard-forecast.onrender.com",
    "Mosque Location Finder API":"https://masjid.onrender.com",
    // "Bus Booking System (On going)": "https://github.com/mnwanx/bus_reservation_system_production",
    "Hand Gesture (Python + OpenCV)":"assets/hand_gesture_project.mp4",
    "Bus Reservation System": "https://www.linkedin.com/posts/mnwanx_bus-reservation-system-original-project-activity-7240237449086394369-s1Sh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI756IBy0L0gr7K3EC-5W8vIDCVUozCCRE",
    "MySolat (Application)": "https://mnwanx.github.io/mysolat_website/MySolat.apk",
    "MySolat (LinkedIn Documentation)":"https://www.linkedin.com/posts/mnwanx_mysolat-v2024-updated-post-this-app-was-activity-7239117922332286976-bueO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI756IBy0L0gr7K3EC-5W8vIDCVUozCCRE",
    "MySolat (GitHub Documentation)": "https://github.com/mnwanx/mysolat_website",
    "Music E-Commerce":"https://mnwanx.github.io/music_store",
    "Smart POT / Farming System": "https://www.linkedin.com/posts/mnwanx_mini-project-semester-1-smart-farming-system-activity-7238406170510553090-TEYP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI756IBy0L0gr7K3EC-5W8vIDCVUozCCRE",
    "StreameoPod (MP3 Player Version of Streameo App)":"https://www.linkedin.com/posts/mnwanx_its-been-a-long-time-since-my-last-post-activity-7300082818867503104-Nuu8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI756IBy0L0gr7K3EC-5W8vIDCVUozCCRE",
    "Natural Hazard Forecast Backend Server (LinkedIn documentation)": "https://www.linkedin.com/posts/mnwanx_natural-hazard-forecast-backend-server-and-activity-7242416683582160898-7mnV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI756IBy0L0gr7K3EC-5W8vIDCVUozCCRE",
};


tools_list = {
    "Resistance Calculator (Mobile View)": "resistance_calculator",
    "BJT Full Analysis Calculator (Mobile View)": "transistor_calculator",
    "Dynamic URL Reroute":"url_shorterner",
    "Instagram Favorite Clear":"https://clearfav.onrender.com",
    "URL Shortener":"url_shorterner",
    "TikTok Undo": "https://github.com/mnwanx/tiktok_unrepost",
};
months_list = "January, February, March, April, May, June, July, August, September, October, November, December";
day_list = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";
self_description = '"If I could change, I would, take back the pain, I would. Retrace every wrong move that I made, I would. If I could stand up and take the blame, I would. I would take all my shame to the grave"<br>~ Linkin Park ~';
function show_projects(id)  {
    window.location.href = projects_list[id];
}

function open_tools(tool) {
    window.location.href = tools_list[tool];
}

function contact_me(id)   {
    window.location.href = contact_developer[id];
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

    document.getElementById("display_time").innerHTML = hour + " : " + minute + " : " + second;
    document.getElementById("display_date").innerHTML = day_list.split(",")[date.getDay()] + ", " + today_date + " " + months_list.split(",")[date.getMonth()] + " " + date.getFullYear();
}

setInterval(update_current_time, 1000);
var background_music =  new Audio("assets/background_music_2.mp3");
var typing_sfx = new Audio("assets/typing.mp3");


async function show_description()   {
    typing_sfx.play();
    description = document.getElementById("self_description");
    for (i = 0; i < self_description.length; i++)   {
        
        description.innerHTML += self_description[i] + " _";
        await new Promise(sleep => setTimeout(sleep, 20));
        description.innerHTML = description.innerHTML.replace(" _", "");
    }
    description.innerHTML = self_description + "<text id='blinking_cursor'> _</text>";
    document.getElementById("blinking_cursor") . style . animation = "blink 1s step-start 0s infinite";
    typing_sfx.pause();
    background_music.play();
}


function close_msg_box()    {
    document.getElementById("msg_box").remove();
    background_music.loop = true;
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
    document.getElementById("age") . innerHTML = (date.getFullYear() - 2003) + " y/o";
    target = document.getElementById("projects");
    head = document.createElement("h2");
    node = document.createTextNode("Projects (More on GitHub)");
    head.appendChild(node);
    head.setAttribute("onclick", "show_projects('GitHub')");
    target.appendChild(head);

    for (i = 1; i < Object.keys(projects_list).length; i++)  {
        para = document.createElement("p");
        node = document.createTextNode(Object.keys(projects_list)[i]);
        para.setAttribute("onclick", "show_projects('" + Object.keys(projects_list)[i] + "')");
    para.appendChild(node);
    target.appendChild(para);
    }
    target = document.getElementById("tools");
    for (i = 0; i < Object.keys(tools_list).length; i++)   {
        para = document.createElement("p");
        node = document.createTextNode(Object.keys(tools_list)[i]);
        para.setAttribute("onclick", "open_tools('"+ Object.keys(tools_list)[i] +"')")
        para.appendChild(node);
        target.appendChild(para);
    }
    var cursorOffset = {
        left : -20
      , top  : 0,
      
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

       $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
       $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';
       msg = document.createElement("p");
       msg.setAttribute("id", "msg");
       msg.setAttribute("style", "width:100%; left: "+ 120 +"px; top: "+ 0+"px; opacity:1;");

       window.addEventListener('contextmenu', function(right_click)   {
        right_click.preventDefault();
        $cursor.appendChild(msg);
        show_helper("What r u searching 4?");
     });

       if (projects_hover.matches(':hover'))    {
        // node = document.createTextNode("Click one of those to see the project");
        msg.appendChild(node);
        
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            show_helper("Click one of these to see the project!");
            // msg_shown = !msg_shown;
        } 
       }    else if (profile_hover.matches(':hover'))   {
        // node = document.createTextNode("Get to know me");
        msg.appendChild(node);
        if (!msg_shown) {
            
            $cursor.appendChild(msg);
            show_helper("Get to know me :)");
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
            }
       } else if (date_hover.matches(':hover')) {
        if (!msg_shown) {
            $cursor.appendChild(msg);
            show_helper("Date of Death !");
        }
   } else   {
        close_msg();
    }
     
     });
     function close_msg()   {
        try {
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
     node = document.createTextNode("Close");
     close_button.appendChild(node);
     box.appendChild(document.createElement("br"));
     box.appendChild(close_button);
     target.appendChild(box);
    //  background_music.play();
}

