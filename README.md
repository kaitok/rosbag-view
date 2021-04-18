# rosbag-view

## Docker

### Pull image  
`docker pull ros:melodic`

### Build Container  
`docker build . --tag REPOSITORY:TAG`

### Start Container  
`docker run -it --name ros-a -v /Users/kaitokinjo/work/rosbag-view/data/:/tmp/data ros-a:ros-a`  
`docker start 'container name'`

### Attach to Container  
`docker attach 'container name'`