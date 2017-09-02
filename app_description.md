# innoraft_poc

AngularJS 1.6 application

Creation of a simple login validation with route to a user specific dashboard detailing data based on the user types.

Key features used: 
  *ngModelController for username validation
  *logging out when page is refreshed
  *prevention of traversal to dashboard from login without logging in via browser forward and back buttons or editing URL manually
  *transclusion of common data across all users
  *using conditional dom loading based on the permissions set and bind via text binding '@' and ng-if
