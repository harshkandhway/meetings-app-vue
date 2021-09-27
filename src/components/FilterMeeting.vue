<template>
    <div>
        <h2>Filtermeeting</h2>
        <div class="search-filter" id="search-for-meeting">
                <form action="">
                <div class="search-for-meeting">
                    <div class="search-container">
                        <h2>Search for meetings</h2>
                        <hr />
                        <label for="date-selector">
                            <p>Date</p>
                        </label>
                        <select name="date-selector" id="date-selector1" class="date-selector" v-model="period">
                            <option value="All">All</option>
                            <option value="Past">Past</option>
                            <option value="Today">Today</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                        <label for="search-for">
                            <p>Search for</p>
                        </label>
                        <textarea name="search-for" id="search-for"
                            placeholder="Search using words which describe the meeting" v-model="search"></textarea>
                        <input type="button" value="Search" class="fbutton my-m" v-on:click="searched(period)">
                    </div>
                </div>
                </form>
                <div v-if="matching">
                <h1 style="margin: 0;">Meetings matching search criteria</h1>
                <hr />
                <div class="matching" v-for="(meeting,index) in meetings" :key="meeting.id">
                    <div class="matching-container" v-if="temp[index]">
                        <h2 style="margin: 0;">{{meeting.date}}</h2>
                        <p style="margin: 10px 0;font-weight: 800;">{{meeting.name}}</p>
                        <input type="button" value="Excuse yourself" class="fbutton my-m"
                            style="margin: 0;background-color: crimson; border: 1px solid crimson"
                            v-on:click="excuse(meeting._id,index)">
                        <hr />
                        <p style="margin-bottom: 5px;"><b>Attendees</b>: <span v-for="attendee in meeting.attendees" :key="attendee.id">{{attendee.email}}  </span></p>
                        <div class="select-member" style="height: 30px; margin: 0;">
                            <input type="text" name="member" id="member" placeholder="Select member"
                                style="height: inherit; border-radius: 5px; border: 1px solid lightgray;">
                            <button style="height: inherit; border-radius: 5px; outline: none;">Add</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios"
import {meetings} from "@/services/meetings.js"
import token from '@/config'
console.log("token",token)
axios.defaults.headers.common['Authorization'] = token;
// import AppConfig from "@/config"
// axios.defaults.headers.common['Authorization'] = AppConfig.token;
import moment from 'moment'
export default {
    data(){
        return{
            matching: false,
            meetings: [],
            temp:[],
            period: "All",
            search: "",
        }
    },
    methods:{
        searched(period){
            this.period = period
            console.log(period)
            this.matching= true;
            meetings(period,this.search).then(data=>{
            this.meetings = data;
            let size = this.meetings.length;
            for(let i=0;i<size;i++)
                {
                    this.meetings[i].date = moment(this.meetings[i].date.slice(0,10)).format('Do MMMM YYYY') +"\t"+ this.meetings[i].startTime.hours + ":" + this.meetings[i].startTime.minutes +" - "+ this.meetings[i].endTime.hours + ":" + this.meetings[i].endTime.minutes
                }
        })
        },
        excuse(id,index){
            this.temp[index]=false;
            console.log("temp array",this.temp)
            return axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/${id}?action=remove_attendee`)
            .then((res1)=>{
                meetings(this.period,this.search).then(data=>{
                this.meetings = data;
                let size = this.meetings.length;
                console.log(res1.data)
                console.log("excuse",this.meetings)
                for(let i=0;i<size;i++)
                {
                    this.meetings[i].date = this.meetings[i].date.slice(0,10)
                    this.temp[i]=true;
                }
                return data;
        })
            }).catch((error)=>error)
        }
    },
    created(){
        meetings(this.period,this.search).then(data=>{
            console.log("meetings page",data)
            console.log("attendees",data[0].attendees[0])
            this.meetings = data;
            let size = this.meetings.length;
            for(let i=0;i<size;i++)
            {
                this.meetings[i].date = this.meetings[i].date.slice(0,10)
                this.temp[i]=true;
            }
        })
    }
}
</script>

<style scoped>

</style>