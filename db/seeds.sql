INSERT INTO departments (name)
VALUES
  ('Product'),
  ('Engineering'),
  ('Marketing'),
  ('Support');


INSERT INTO roles (title, salary, department_id)
VALUES
  ('Product Manager', 100000, 1),
  ('Software Engineer', 80000, 2),
  ('Marketing Manager', 600000, 3),
  ('Support Engineer', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Jayson', 'Tatum', 1, 1),
  ('Marcus', 'Smart', 2, 2),
  ('Jalen', 'Brown', 3, 3),
  ('Robert', 'Williams', 4, 4);
