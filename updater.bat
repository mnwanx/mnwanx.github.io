@echo off
set /p update_msg="Enter commit msg >> "

git add .
IF "%update_msg%"=="" (
    git commit -m "Update"
) ELSE (
    git commit -m "%update_msg%"
)
git push

