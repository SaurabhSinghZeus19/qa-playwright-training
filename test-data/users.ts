export type UserType = 'standard' | 'locked' | 'problem';
export interface UserCredentials {      
  username: string; 
  password: string; 
  type: UserType; 
  firstName?: string;
  lastName?: string;
  postalCode?: string;
} 
 
export const users: UserCredentials[] = [ 
  { 
    username: 'standard_user', 
    password: 'secret_sauce', 
    type: 'standard',
    firstName: 'Saurabh',
    lastName: 'Singh',
    postalCode: '400077'
  },
    
  { 
    username: 'locked_out_user', 
    password: 'secret_sauce', 
    type: 'locked' 
  }, 
  { 
    username: 'problem_user', 
    password: 'secret_sauce', 
    type: 'problem' 
  } 
]; 