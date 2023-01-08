import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Rescue = () => {
    // <!-- Study Section --> 
    return (
        <>
   <section id="study" class="study text-center wow fadeIn"  data-wow-duration="2s" data-wow-dealy="1.5s">
        <div class="container">
            <div class="row">
                <div class="main_study_area sections">
                    <div class="head_title text-center">
                        <h2>사용방법</h2>
                        <div class="subtitle">
                            A brief story about how this process works, keep an eye till the end.
                        </div>
                        <div class="separator"></div>
                    </div>


                        {/* 슬라이드로 진행 */}
                    <div class="single_study_content">
                        <div class="col-sm-6">
                            <div class="single_study_slid_area">

                                <div class="single_study_text">
                                    <div class="study_slider"> 
                                        <div class="item">
                                            <div class="s_study_icon">
                                                <i class="fa fa-lightbulb-o"></i>  
                                            </div>
                                            <h4>1. 전원 켜기</h4>
                                            <div class="separator3"></div>
                                            <p>자동 심장충격기의 전원을 켠다. 전원이 들어오면 음성이 나오면서 절차를 안내해준다.</p>

                                            <a href="https://youtu.be/ViZtrjdwY9I" class="btn btn-lg">view video</a>
                                        </div>

                                        <div class="item">
                                            <div class="s_study_icon">
                                                <i class="fa fa-lightbulb-o"></i>  
                                            </div>
                                            <h4>2. 패드 부착</h4>
                                            <div class="separator3"></div>
                                            <p>상체를 노출시킨 후 우측 쇄골 아래쪽에 패드를 부착한다.<br/>
                                            또 다른 패드는 좌측 유두 바깥쪽 아래의 겨드랑이 중앙선에 부착한다.<br/>
                                            *각 패드의 표면에는 부착할 위치가 어디인지 그림으로 표시되어 있으므로 참고한다.
                                            </p>

                                            <a href="https://youtu.be/ViZtrjdwY9I" class="btn btn-lg">view video</a>
                                        </div>

                                        <div class="item">
                                            <div class="s_study_icon">
                                                <i class="fa fa-lightbulb-o"></i>  
                                            </div>
                                            <h4>3. 심장리듬 분석</h4>
                                            <div class="separator3"></div>
                                            <p>패드에 연결된 선을 기계에 꽂는다.<br/>
                                            기계에서 자동으로 심장리듬 분석 중이라는 말이 나온다.<br/>
                                            심장 분석에 오류가 나지 않도록 환자에게 닿지 않도록 떨어진다.
                                            </p>

                                            <a href="https://youtu.be/ViZtrjdwY9I" class="btn btn-lg">view video</a>
                                        </div>
                                        <div class="item">
                                            <div class="s_study_icon">
                                                <i class="fa fa-lightbulb-o"></i>  
                                            </div>
                                            <h4>4. 전기 충격</h4>
                                            <div class="separator3"></div>
                                            <p>제세동이 필요하다면 기계가 자동으로 충전을 하며, 충전 후 제세동 버튼을 누르라는 메시지가 나온다.<br/>
                                            버튼을 누르기 전 주변 사람들에게 환자와 떨어지도록 다시 주의를 준다.<br/> 
                                            제세동버튼을 누르면 환자에게 제세동을 위한 전기충격이 가해지게 된다.                                     
                                            </p>

                                            <a href="https://youtu.be/ViZtrjdwY9I" class="btn btn-lg">view video</a>
                                        </div>
                                        <div class="item">
                                            <div class="s_study_icon">
                                                <i class="fa fa-lightbulb-o"></i>  
                                            </div>
                                            <h4>5. 무한 반복</h4>
                                            <div class="separator3"></div>
                                            <p>전기충격이 필요없거나, 전기 충격이 주어지고 나서는 즉시 심폐소생술을 시행한다.</p>
                                            <p>기계는 2분마다 심장리듬을 분석한다. 심폐소생술 도중에 기계에서 음성 지시기 나오면 기계의 지시에 따라서 위의 절차를 반복하도록 한다.</p>

                                            <a href="https://youtu.be/ViZtrjdwY9I" class="btn btn-lg">view video</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="single_study_right_img">
                            <div class="col-sm-6">
                                <div class="single_study_img">
                                    <img src="assets/images/study.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section> 
    </>
    );
         // function TabPanel(props) {
    //     const { children, value, index, ...other } = props;

    // return (
    //    <>
    // <Box
    //   sx={{
    //     bgcolor: 'background.paper',
    //     width: 500,
    //     position: 'relative',
    //     minHeight: 200,
    //   }}
    // >
    //   <AppBar position="static" color="default">
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       indicatorColor="primary"
    //       textColor="primary"
    //       variant="fullWidth"
    //       aria-label="action tabs example"
    //     >
    //       <Tab label="Item One" {...a11yProps(0)} />
    //       <Tab label="Item Two" {...a11yProps(1)} />

    //     </Tabs>
    //   </AppBar>

    //   <SwipeableViews
    //     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    //     index={value}
    //     onChangeIndex={handleChangeIndex}
    //   >
    //     <TabPanel value={value} index={0} dir={theme.direction}>
    //       Item One
    //     </TabPanel>
    //     <TabPanel value={value} index={1} dir={theme.direction}>
    //       Item Two
    //     </TabPanel>
    //   </SwipeableViews>

    //   {fabs.map((fab, index) => (
    //     <Zoom
    //       key={fab.color}
    //       in={value === index}
    //       timeout={transitionDuration}
    //       style={{
    //         transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
    //       }}
    //       unmountOnExit
    //     >
    //       <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
    //         {fab.icon}
    //       </Fab>
    //     </Zoom>
    //   ))}
    // </Box>

    //    </>
    // );
// }

}

export default Rescue;