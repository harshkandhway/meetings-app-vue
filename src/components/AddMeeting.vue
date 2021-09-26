<template>
    <div>
        <div class="add-new search-for-meeting" id="add-new">
                <div class="add-new-container search-container">
                    <h2>Add a new meeting</h2>
                    <hr />
                    <label for="date-selector">
                        <p>Date</p>
                    </label>
                    <input type="date" name="dateSelector" id="date-selector2" class="date-selector">

                    <p>Start time (hh:mm)</p>
                    <select name="start-time" id="start-time1" class = "time">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <span>:</span>
                    <select name="start-time" id="start-time2"
                        class = "time">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    <p>End Time (hh:mm)</p>
                    <select name="start-time" id="start-time1"
                        class = "time">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <span>:</span>
                    <select name="start-time" id="start-time2"
                        class = "time">
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
                        placeholder="john@example.com, @annual-day, mark@example.com">
                    <input type="button" value="Add meeting" class="fbutton my-m">
                </div>
            </div>
    </div>
</template>

<script>
import {addMeetings} from '@/services/meetings.js'
export default {
    data(){
        return{

        }
    },

    created(){
        addMeetings().then((data)=>{
        console.log("Add Meetings page",data);
    })
    
}}
    
</script>

<style scoped>

.date-selector{
    border: 1px solid white;
}
.time{
    height: 35px; 
    width: 50px; 
    font-weight: 800; 
    font-size: large; 
    border-radius: 5px;
}
.emails{
    height: 20px; 
    width: 100%; 
    border-radius: 5px;
    border: 1px solid white;
}

</style>