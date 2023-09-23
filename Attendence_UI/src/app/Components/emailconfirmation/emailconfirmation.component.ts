import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navigateUrl } from 'src/app/Common/APIUrls';
import { RegisterService } from 'src/app/Services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emailconfirmation',
  templateUrl: './emailconfirmation.component.html',
  styleUrls: ['./emailconfirmation.component.scss']
})
export class EmailconfirmationComponent implements OnInit {
  changehtml=false;
  isConfirmed:any;
  constructor(private route:Router, private router:ActivatedRoute,private registerservice:RegisterService){}
  ngOnInit(): void {
    debugger
    this.router.queryParams.subscribe(params => {
    
     const userid = params['userid'];
     const token=params['token']
     if(userid==undefined||null&&token==undefined||null) return userid||token;
  this.registerservice.EmailConfirmation(userid,token).subscribe((res)=>{
      this.isConfirmed=res  
      this.changehtml=true
      console.log(this.changehtml);
      
  },
  (err)=>{
   // this.route.navigate([navigateUrl.Register]);
  })
    });
  
  }

}
