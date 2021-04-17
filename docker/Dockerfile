FROM ros:melodic

RUN mkdir -p catkin_ws/src

WORKDIR catkin_ws/src
RUN catkin_create_pkg beginner_tutorials std_msgs rospy roscpp

WORKDIR beginner_tutorials

COPY ./talker.cpp ./src/
COPY ./listener.cpp ./src/