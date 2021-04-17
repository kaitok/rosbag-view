FROM ros:melodic

# install build tools
RUN apt-get update && apt-get install -y \
  python-catkin-tools \
  && rm -rf /var/lib/apt/lists/*

# clone ros package repo
ENV ROS_WS /opt/ros_ws
RUN mkdir -p $ROS_WS/src
WORKDIR $ROS_WS
RUN git -C src clone \
  -b $ROS_DISTRO-devel \
  https://github.com/ros/ros_tutorials.git

# install ros package dependencies
RUN apt-get update && \
  rosdep update && \
  rosdep install -y \
  --from-paths \
  src/ros_tutorials/roscpp_tutorials \
  --ignore-src && \
  rm -rf /var/lib/apt/lists/*

# build ros package source
RUN catkin config \
  --extend /opt/ros/$ROS_DISTRO && \
  catkin build \
  roscpp_tutorials