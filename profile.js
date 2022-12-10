const appContainer = document.getElementById("app");

appContainer.innerHTML = `
<body> <!-- Header menu section starts -->
<div class="main">
<div class="main_resize">
    <div class="header">   
        <div class="navbar" id="navbar">
            <div class="logo">  
                <a href="#"><h1><span>Let's</span><img src="../images/logo1.png" height="40" width="40" alt="The website's logo" />bowl</a></h1>
            </div>
            <!-- <ul class="menu-bar" id="menu">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../calendar.html">Calendar</a></li> 
                <li><a href="../about.html">About Us</a></li>
                <li><a href="../contact.html">Contact Us</a></li>
            </ul> -->
            <input type="search" name="search" id="search-bar" placeholder=" Search...">
            <img src="../images/search.png" alt="magnifying glass" id="search-icon">
        </div>
    </div> 
    <div class="clr"></div>
    <!-- Main header ssection starts -->
        <div id="banner"> 
            <img id="banner-img" src="../images/header_images.png" alt="A custom banner image across the top of the page.">  
            <img id="profile_pic" src="../images/logo.png" alt="The profile owner's picture"> 
            <div id="username">username</div> 
            <br> 
        </div> <!-- User quick link buttons section starts -->
        <div id="text">
            <div id="menu_buttons">Timeline</div> 
            <div id="menu_buttons">About Me</div>
            <div id="menu_buttons">Friends</div>
            <div id="menu_buttons">Photos</div>
            <div id="menu_buttons">Videos</div>
            <div id="menu_buttons">Settings</div>
            <br>
        </div>
    </div> <!-- User quick link buttons section ends -->
    </div> <!-- Main header section ends --> 
    <br> <!-- Main body section starts -->
    <br> <!-- Main body section ends -->
    <div id="main" class="main_resize">
        <div style="display:flex;"> 
            <!-- Friends Section starts --> 
            <div id="friends_bar" style="background-color:#ffffff; min-height:450px; flex:1; margin:15px 10px 10px 15px; text-align:center; font-size: 18px;"> 
                <div id="photos" style="margin:15px; font-size: 18px; font-weight: 600;"> 
                Friends<br> 
                </div> 
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;"> 
                    <img id="friends_img" src="../images/Friend-1.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;">Friend's Name</div> 
                </div> 
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;">
                    <img id="friends_img" src="../images/Friend-2.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;">Friend's Name</div> 
                </div>
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;"> 
                    <img id="friends_img" src="../images/Friend-3.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;">Friend's Name</div> 
                </div> 
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;"> 
                    <img id="friends_img" src="../images/Friend-4.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;"">Friend's Name</div> 
                </div> 
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;"> 
                    <img id="friends_img" src="../images/Friend-5.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;">Friend's Name</div> 
                </div> 
                <div id="friends_img" style="margin:10px; font-size: 14px; display:flex;"> 
                    <img id="friends_img" src="../images/Friend-6.png" alt="A friends profile picture" width="70" height="70"> 
                    <div style="margin:10px; font-size: 14px; display:flex;">Friend's Name</div> 
                </div> 
                <br> <!-- Photos Section starts --> 
                <div id="photos" style="margin:15px; font-size: 18px; font-weight: 600;"> 
                    Photos<br> 
                    <br> 
                    <img id="friends_img" src="../images/Photos-1.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-2.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-3.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-4.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-5.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-6.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-7.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-8.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <img id="friends_img" src="../images/Photos-9.png" alt="A friends profile picture" width="60" height="60" padding="10px"> 
                    <br>
                </div> 
            </div> <!-- Friends Sections ends -->
            <!-- Posts Textarea section starts --> 
            <div style="background-color: #ffffff; min-height: 450px; flex:2.5; margin:15px; text-align:center; font-size: 18px; text-align: left;"> 
                <div id="textarea" type="textarea" style=" color:#6a6a6a; min-height: 96px; font-size: 14px; text-align: left; margin: 7px 7px 7px 7px; border:solid 1px #3a3a3a; padding:5px; "> 
                    <textarea id="textarea" style="border:none; min-height:63px; min-width:610px; padding:5px; color:#6a6a6a; text-align: left;" placeholder="What's on your mind...?"></textarea> 
                    <input id="post_button" type="submit" value="Post" style="float:right; background-color:#11bb66; border:none; color:white; padding:1px; font-size:16px; border-radius:4px; width:50px; margin: 3px; "> 
                    <br>
                    <br> 
                </div> 
                <!-- Timeline Posts Section starts -->
                <div id="posts"> 
                    <div>
                        <img src="../images/Friend-5.png" alt="The profile picture of the person who made the post" width="75" height="75" padding="10px"> 
                    </div> 
                    <div> 
                        <div style="padding:5px; font-weight:bold; color:#11bb66; font-size: 16px;">Friend's Name</div> 
                        <div style="padding:10px; color:#1a1a1a; ">Aliquam dolorum labore ipsa fugit dignissimos velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui eius sapiente laboriosam excepturi.</div>
                        <div style="text-align:right"><a href="">Like</a> . <a href="">Comment</a> . <span style="color:#5a5a5a; text-align:right;">July 11 2022</span></div>
                    </div>
                </div> 
                <div id="posts"> 
                    <div>
                        <img src="../images/Friend-2.png" alt="The profile picture of the person who made the post" width="75" height="75" padding="10px"> 
                    </div> 
                    <div> 
                        <div style="padding:5px; font-weight:bold; color:#11bb66; font-size: 16px;">Friend's Name</div> 
                        <div style="padding:10px; color:#1a1a1a; ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis cupiditate labore, placeat harum, vel delectus totam veritatis perspiciatis eveniet quos temporibus sit! Libero laborum cumque similique, earum nihil illum? Aliquam dolorum labore ipsa fugit dignissimos velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui eius sapiente laboriosam excepturi.</div>
                        <div style="text-align:right"><a href="">Like</a> . <a href="">Comment</a> . <span style="color:#5a5a5a; text-align:right;">July 11 2022</span></div>
                    </div> 
                </div> 
                <div id="posts"> 
                    <div>
                        <img src="../images/Friend-3.png" alt="The profile picture of the person who made the post" width="75" height="75" padding="10px"> 
                    </div> 
                    <div> 
                        <div style="padding:5px; font-weight:bold; color:#11bb66; font-size: 16px;">Friend's Name</div> 
                        <div style="padding:10px; color:#1a1a1a; ">Aliquam dolorum labore ipsa fugit dignissimos velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui eius sapiente laboriosam excepturi.</div>
                        <div style="text-align:right"><a href="">Like</a> . <a href="">Comment</a> . <span style="color:#5a5a5a; text-align:right;">July 11 2022</span></div>
                    </div> 
                </div> 
                <div id="posts"> 
                    <div>
                        <img src="../images/Friend-1.png" alt="The profile picture of the person who made the post" width="75" height="75" padding="10px"> 
                    </div> 
                    <div> 
                        <div style="padding:5px; font-weight:bold; color:#11bb66; font-size: 16px;">Friend's Name</div> 
                        <div style="padding:10px; color:#1a1a1a; ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam molestiae quae distinctio odio cumque laborum reiciendis vitae voluptates quaerat, ut cum perspiciatis nulla. Obcaecati quis eos earum distinctio ab. Aliquam dolorum labore ipsa fugit dignissimos velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui eius sapiente laboriosam excepturi.</div>
                        <div style="text-align:right"><a href="">Like</a> . <a href="">Comment</a> . <span style="color:#5a5a5a; text-align:right;">July 11 2022</span></div> 
                    </div> 
                </div>
            </div>
        </div> 
    </div>
    <div id="fbg" class="fbg_resize">
        <div style="background-color: #ffffff; min-height: 10px;"></div> 
    </div>
        <div id="fbg" class="fbg">
        <div class="fbg_resize">
        <div class="col c1">
            <h2><span>Recommended</span></h2> 
            <a href="#"><img src="../images/pic_1.jpg" width="58" height="58" alt="Northmead Bowling Club Logo" /></a> <a href="#"><img src="../images/pic_2.jpg" width="58" height="58" alt="Bowls SA Logo" /></a> <a href="#"><img src="../images/pic_3.jpg" width="58" height="58" alt="The South African Olympic Committee Logo" /></a> <a href="#"><img src="../images/pic_4.jpg" width="58" height="58" alt="The South African Department of Sports, Arts and Culture Emblem " /></a> <a href="#"><img src="../images/pic_5.jpg" width="58" height="58" alt="Bowls - 1 Sport 4 Life Logo " /></a> <a href="#"><img src="../images/pic_6.jpg" width="58" height="58" alt="Republic of South Africa Department of Sports, Arts and Culture words written out" /></a> </div>
        <div class="col c2">
            <h2><span>Joker Draws</span></h2>
            <p>Live Joker Draw Events<br />
            Follow along with the weekly Joker Draw for your club. What's happened so far and what's still coming up? </p>
            <div><a href="#">The Board... </a></div>
        </div>
        <div class="col c3">
            <h2><span>Newsletter</span></h2>
            <p>Subscribe to our monthly newsletter <br />
            for announcements, promotions, special discounts and more. <a href="#">Have a look...</a></p></div> 
        </div>
        <div class="col c3">
            <form name="subscribe" data-netlify="true"> 
            <p><label>Email <input type="email" name="email" required="true"></label></p> 
            <p><button type="submit">Send</button></p> 
            </form>
        </div>
    <p>
        | 
    </p>  
        </div> 
    <br> 
    </div>
    </div>
    </div> <!-- Footnote link to template creator section starts -->
        <div class="footer">
        <div class="footer_resize">
            <p class="lf">&copy; Copyright 2022 <a href="#">Let's Bowl</a>. All Rights Reserved.</p> 
            <p class="lf">View our <a href="../privacy.html">Privacy Policy</a></p> 
        <div class="clr"></div>
    </div>
    </div> <!-- Footnote link to template creator section ends -->
</body>
  `;
document.getElementById("c").innerHTML = appContainer;