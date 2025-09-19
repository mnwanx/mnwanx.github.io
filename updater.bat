@echo off
set /p update_msg="Enter commit msg >> "
set msg = %update_msg%

git add .
IF "%msg%"=="" (
    git commit -m "Update"
) ELSE (
    git commit -m "%msg%"
)
git push
