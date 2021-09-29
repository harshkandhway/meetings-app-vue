import Router from 'vue-router';

import MeetingsCalendar from '@/components/MeetingsCalendar.vue';
import Teams from '@/components/Teams';
import Signup from '@/components/Signup';
import PageNotFound from '@/components/PageNotFound';
import Meetings from '@/components/Meetings';
import Login from '@/components/Login';
import FilterMeetings from '@/components/FilterMeeting';
import AddTeam from '@/components/AddTeam';
import AddMeeting from '@/components/AddMeeting';


const router = new Router({
    mode: 'history',
    routes: [
        {
            name:'MeetingsCalendar',
            path: '/',
            component: MeetingsCalendar

        },
        {
            name: 'meeting',
            path : '/meeting',
            component : Meetings,
            children: [
                {
                    name:'addmeeting',
                    path: '/meeting/addmeeting',
                    component: AddMeeting,
                },
                {
                    name:'FilterMeeting',
                    path:'/meeting/filtermeetings',
                    component: FilterMeetings,
                },
            ]
        },
        {
            name: 'Teams',
            path: '/teams',
            component: Teams,
            children: [
                {
                    name:'addteam',
                    path: '/teams/addteam',
                    component: AddTeam,
                }
            ]
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Signup',
            path: '/signup',
            component: Signup
        },
        {
            name: 'PageNotFound',
            path: '*',
            component: PageNotFound
        }
    ]
});

export default router;