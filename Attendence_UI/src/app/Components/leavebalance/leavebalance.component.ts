import { Component } from '@angular/core';

@Component({
  selector: 'app-leavebalance',
  templateUrl: './leavebalance.component.html',
  styleUrls: ['./leavebalance.component.scss']
})
export class LeavebalanceComponent {
  leaveCategories: any[] = [
    {
      username: 'John',
      leaveName: 'Work from home',
      grant: 10,
      count: 5,
      balance: 5
    },
    {
      username: 'Jane',
      leaveName: 'Sick leave',
      grant: 15,
      count: 8,
      balance: 7
    },
    {
      username: 'Alice',
      leaveName: 'Marriage leave',
      grant: 5,
      count: 2,
      balance: 3
    },
    {
      username: 'Bob',
      leaveName: 'Casual leave',
      grant: 12,
      count: 4,
      balance: 8
    }
  ];
}
