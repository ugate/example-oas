select id
from person
where email = :username
and password = crypt(:password, password)