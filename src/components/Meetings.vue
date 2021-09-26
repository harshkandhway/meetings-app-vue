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
                                <router-link to="/meeting/filtermeetings">Filter/Search meetings</router-link>
                            </div>
                        </div>
                    </label>
                    <label for="outer-design2">
                        <div id="add-meeting-container">
                            <input type="radio" name="outer" id="outer-design2" class="outer-design2 dis">
                            <div class="add-meeting">
                                <router-link to="/meeting/addmeeting">Add a meeting</router-link>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>

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