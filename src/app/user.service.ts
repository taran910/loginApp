
export class ListService{
    list=[
        {
            "name":"Billy Lee",
            "position":"Web Developer",
            "office":"Detroit",
            "salary":"$50000",
            "edit":"Edit",
            "delete":"Delete"

        },
        {
            "name":"John Doe",
            "position":"Manager",
            "office":"Troy",
            "salary":"$90000",
            "edit":"Edit",
            "delete":"Delete"
        },
        {
            "name":"James Baxter",
            "position":"IT Support",
            "office":"Detroit",
            "salary":"$30000",
            "edit":"Edit",
            "delete":"Delete"
        },
        {
            "name":"Jimmy Lee",
            "position":"Web Developer",
            "office":"Detroit",
            "salary":"$50000",
            "edit":"Edit",
            "delete":"Delete"
        },
        {
            "name":"Nick Wess",
            "position":"Sales",
            "office":"Ann Arbor",
            "salary":"$40000",
            "edit":"Edit",
            "delete":"Delete"
        },
        {
            "name":"Sarah Deets",
            "position":"Graphic Designer",
            "office":"Ann Arbor",
            "salary":"$40000",
            "edit":"Edit",
            "delete":"Delete"
        }
    ]
    getList(){
        return this.list;
    }
    chang(li){
        this.list=li;
    }
}