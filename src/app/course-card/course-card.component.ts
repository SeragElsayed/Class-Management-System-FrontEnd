import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(private router: Router) { }
  
  @Input() Course:Object;
  btnClick= function () {
    this.router.navigateByUrl('/course/details');
};
  ngOnInit(): void {
  }
  imgsrc:any="../assets/images/bg_1.jpg";
  courselist=[
    {
    img:this.imgsrc,
    name:"c#",
    Description:"back end language",
    Price:"1000",
    Category:"hrml"
    
      
    }, {
      img:this.imgsrc,
      name:"c#",
      Description:"back end language"
      ,
      Price:"1000",
    Category:"hrml"
    
      
        
      }, {
        img:this.imgsrc,
        name:"c#",
        Description:"back end language"
        ,
        Price:"1000",
    Category:"hrml"
      
        
          
        }, {
          img:this.imgsrc,
          name:"c#",
          Description:"back end language"
          ,
          Price:"1000",
    Category:"hrml"
        
          
            
          },{
            img:this.imgsrc,
            name:"c#",
            Description:"back end language"
            ,
            Price:"1000",
    Category:"hrml"
          
            
              
            },{
              img:this.imgsrc,
              name:"c#",
              Description:"back end language"
              ,
              Price:"1000",
    Category:"hrml"
            
              
                
              },{
                img:this.imgsrc,
                name:"c#",
                Description:"back end language"
                ,
                Price:"1000",
    Category:"hrml"
              
                
                  
                },{
                  img:this.imgsrc,
                  name:"c#",
                  Description:"back end language"
                  ,
                  Price:"1000",
    Category:"hrml"
                
                  
                    
                  },{
                    img:this.imgsrc,
                    name:"c#",
                    Description:"back end language"
                    
                    ,
                    Price:"1000",
                    Category:"hrml"
                    
                      
                    },{
                      img:this.imgsrc,
                      name:"c#",
                      Description:"back end language"
                      ,
                      Price:"1000",
    Category:"hrml"
                    
                      
                        
                      }
    
  ]
}
