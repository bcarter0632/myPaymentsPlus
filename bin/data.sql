insert into Parent (id, email, firstName, lastName, password, username)  values (1, 'test@test.com', 'Test', 'Parent', 'password', 'test1234');
insert into Child (id, balance, firstName, lastName, institution, state, studentId, parentId)  values (1, 10.25, 'Test', 'Child1', 'White Oak Elementary', 'GA', 'GA-12345', 1);
insert into CreditCard (id, name, cardNumber, ccv, expiration, parentId)  values (1, 'First Payment Profile', '1112333344445555', '012', '09/2017', 1);
