
export class ListService{
    list={"array":[
        {
            "name":"Billy Lee",
            "position":"Web Developer",
            "office":"Detroit",
            "salary":"$50000"

        },
        {
            "name":"John Doe",
            "position":"Manager",
            "office":"Troy",
            "salary":"$90000"
        },
        {
            "name":"James Baxter",
            "position":"IT Support",
            "office":"Detroit",
            "salary":"$30000"
        },
        {
            "name":"Jimmy Lee",
            "position":"Web Developer",
            "office":"Detroit",
            "salary":"$50000"
        },
        {
            "name":"Nick Wess",
            "position":"Sales",
            "office":"Ann Arbor",
            "salary":"$40000"
        },
        {
            "name":"Sarah Deets",
            "position":"Graphic Designer",
            "office":"Ann Arbor",
            "salary":"$40000"
        }
    ]}
    getList(){
        return this.list;
    }
}