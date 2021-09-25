<template>
    <div>
        <div class="container">
            <h1>Meetings</h1>
            <hr />
            <div class="container-meeting">
                <div class="options"></div>
                <div class="search-and-add">
                    <label for="outer-design1">
                        <div id="search-meeting-container">

                            <input type="radio" name="outer" id="outer-design1" class="outer-design1 dis" checked>
                            <div class="search">
                                <span>Filter/Search meetings</span>
                            </div>
                        </div>
                    </label>
                    <label for="outer-design2">
                        <div id="add-meeting-container">

                            <input type="radio" name="outer" id="outer-design2" class="outer-design2 dis">
                            <div class="add-meeting">
                                <span>Add a meeting</span>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div class="search-filter" id="search-for-meeting">
                <div class="search-for-meeting">
                    <div class="search-container">
                        <h2>Search for meetings</h2>
                        <hr />
                        <label for="date-selector">
                            <p>Date</p>
                        </label>
                        <select name="date-selector" id="date-selector1" class="date-selector">
                            <option value="All">All</option>
                            <option value="1">Past</option>
                            <option value="2">Today</option>
                            <option value="3">Upcoming</option>
                        </select>
                        <label for="search-for">
                            <p>Search for</p>
                        </label>
                        <textarea name="search-for" id="search-for"
                            placeholder="Search using words which describe the meeting"></textarea>
                        <input type="button" value="Search" class="fbutton my-m">
                    </div>
                </div>
                <h1 style="margin: 0;">Meetings matching search criteria</h1>
                <hr />
                <div class="matching">
                    <div class="matching-container">
                        <h2 style="margin: 0;">12 September 2020 06:00 - 07:00</h2>
                        <p style="margin: 10px 0;font-weight: 800;">Project kickoff</p>
                        <input type="button" value="Excuse yourself" class="fbutton my-m"
                            style="margin: 0;background-color: crimson; border: 1px solid crimson">
                        <hr />
                        <p style="margin-bottom: 5px;"><b>Attendees</b>: mark@example.com, jane@example.com</p>
                        <div class="select-member" style="height: 30px; margin: 0;">
                            <input type="text" name="member" id="member" placeholder="Select member"
                                style="height: inherit; border-radius: 5px; border: 1px solid lightgray;">
                            <button style="height: inherit; border-radius: 5px; outline: none;">Add</button>
                        </div>
                    </div>
                </div>

                <div class="matching">
                    <div class="matching-container">
                        <h2 style="margin: 0;">12 September 2020 09:00 - 10:30</h2>
                        <p style="margin: 10px 0;font-weight: 800;">Aws architecture</p>
                        <input type="button" value="Excuse yourself" class="fbutton my-m"
                            style="margin: 0;background-color: crimson; border: 1px solid crimson">
                        <hr />
                        <p style="margin-bottom: 5px;"><b>Attendees</b>: john@example.com, comjane@example.com</p>
                        <div class="select-member" style="height: 30px; margin: 0;">
                            <input type="text" name="member" id="member" placeholder="Select member"
                                style="height: inherit; border-radius: 5px; border: 1px solid lightgray;">
                            <button style="height: inherit; border-radius: 5px; outline: none;">Add</button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="add-new search-for-meeting" id="add-new" style="display: none;">
                <div class="add-new-container search-container">
                    <h2>Add a new meeting</h2>
                    <hr />
                    <label for="date-selector">
                        <p>Date</p>
                    </label>
                    <input type="date" name="dateSelector" id="date-selector2" class="date-selector"
                        style="border: 1px solid white;">

                    <p>Start time (hh:mm)</p>
                    <select name="start-time" id="start-time1"
                        style="height: 35px; width: 50px; font-weight: 800; font-size: large; border-radius: 5px;">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <span>:</span>
                    <select name="start-time" id="start-time2"
                        style="height: 35px; width: 50px; font-weight: 800; font-size: large; border-radius: 5px;">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    <p>End Time (hh:mm)</p>
                    <select name="start-time" id="start-time1"
                        style="height: 35px; width: 50px; font-weight: 800; font-size: large; border-radius: 5px;">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <span>:</span>
                    <select name="start-time" id="start-time2"
                        style="height: 35px; width: 50px; font-weight: 800; font-size: large; border-radius: 5px;">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    <label for="search-for1">
                        <p>Description</p>
                    </label>
                    <textarea name="search-for1" id="search-for1"
                        placeholder="What is the agenda of the meeting?"></textarea>

                    <label for="emails">
                        <p>EmailIDs of attendees, or team's short</p>
                    </label>
                    <input type="text" name="emails" id="emails" class="emails"
                        style="height: 20px; width: 100%; border-radius: 5px; border: 1px solid white;"
                        placeholder="john@example.com, @annual-day, mark@example.com">
                    <input type="button" value="Add meeting" class="fbutton my-m">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        
    },
    created(){

    }
    
}
</script>

<style>
.container{
    margin: 0 85px;
    z-index: 0;
}
.options{
    border-style: inset;
    border-bottom: 2px solid lightgray;
    border-top: 2px  solid white;
    border-right: 2px solid white;
    border-left: 2px solid white;
    height: 40px;
}

.container-meeting{
    position:relative;
}

.search-and-add{
    position: absolute;
    top:0;
    display: flex;
    height: 40px;
}

.search{
    margin: auto;
    margin-right: 0px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 11px 8px;
}

.add-meeting{
    margin: auto;
    margin-right: 20px;
    display: inline-flex;  
    justify-content: center;
    align-items: center;
    padding: 8px 8px 11px 8px;
}

.search-and-add span{
    display: inline-block;
    color: darkblue;
    font-weight: 800;
    /* height: 18px; */
}

.outer-design2:checked + .add-meeting{
    border: 2px solid lightgray;
    border-bottom: 8px solid white;
    border-radius: 4px;
}

.outer-design2:checked + .add-meeting span{
    color:rgb(58, 58, 58);
}

.outer-design1:checked + .search{
    border: 2px solid lightgray;
    border-bottom: 8px solid white;
    border-radius: 4px;
}

.outer-design1:checked + .search span{
    color:rgb(58, 58, 58);
}

.dis{
    display: none;
}

.search-for-meeting{
    display: inline-flex;
    width: 100%;
    background-color: darkslategrey;
    height: fit-content;
    margin-top: 10px;
    border-radius: 5px;
    flex-direction: column;
    margin-bottom: 10px;
}

.matching{
    display: inline-flex;
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    border: 2px solid lightgray;
    border-radius: 5px;
    flex-direction: column;
    margin-bottom: 10px;
}

.matching-container{
    margin: 20px;
}

.search-filter{
    display: inline-flex;
    flex-direction: column;
    width: 100%;
}

.search-container{
    margin: 30px;
    color: white;
    
}

.search-container h2{
    display: inline-block;
    margin: 0;
}

.date-selector{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    font-weight: 800;
}

.search-container p{
    margin: 20px 0 10px 0;
    padding: 0;
}

textarea{
    resize: none;
    padding: 5px 0 5px 10px;
    width: 99%;
    border-radius: 5px;
}

.fbutton {
    border-radius: 5px;
    border: 1px solid teal;
    background-color: teal;
    font-weight: 500;
    padding: 8px 13px;
    font-size: large;
    color: white;
    margin: 20px 0 0 0;
}

.fbutton:hover {
    background-color: rgb(0, 90, 90);
}

.fbutton:active {
    background-color: rgb(0, 179, 179)
}

.search-container-visibility:checked + .search-for-meeting{
    display: none;

}
</style>