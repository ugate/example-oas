select *, count(*) over() as "total_count"
from person
where 