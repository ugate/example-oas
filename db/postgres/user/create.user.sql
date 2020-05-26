insert into person (first_name, last_name, email, gender, ip_address, dob, country, password)
values (:firstName, :lastName, :username, :gender, :ip, :dob, :country, crypt(:password, gen_salt('bf')));