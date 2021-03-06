import React, { Component, useEffect, useState } from "react";
import "../../css/styles.css";
import { withRouter } from "react-router-dom";
import StatusBar from "../StatusBar/StatusBar";
import imageCat from "../Pictures/cat.jpg";
import { useDispatch } from "react-redux";
import { updateCoin } from "../../../_action/user_action";
function Profile(props) {
  const dispatch = useDispatch();
  const [userCoin, setUserCoin] = useState();

  const loadCoin = () => {
    let LS_OBJECT = JSON.parse(localStorage.getItem("session"));
    let coin = LS_OBJECT.payload.coin;
    setUserCoin(coin);
  };

  useEffect(() => {
    loadCoin();
  }, []);

  const handleAllowButton = (event) => {
    event.preventDefault();
    let LS_OBJECT = require(JSON.parse(localStorage.getItem("session")));

    let coin = LS_OBJECT.payload.coin;
    let Email = LS_OBJECT.payload.email;
    let newCoin;
    setUserCoin(coin);
    console.log("coin: ", coin);
    console.log("coin in LS : ", coin);
    //임의로 50 point를 추가한다.
    newCoin = coin + 50;
    setUserCoin(newCoin);
    //local storage update
    LS_OBJECT.coin = newCoin;
    console.log(LS_OBJECT);
    localStorage.setItem("session", JSON.stringify(LS_OBJECT));

    let body = {
      email: Email,
      coin: newCoin,
    };

    dispatch(updateCoin(body)).then((response) => {
      console.log("response : ", response);
      console.log("response.payload : ", response.payload);

      if (response.payload.updateCoinSuccess) {
        //로그인이 성공을 하면
        console.log("coin update success!!");
        console.log(response);

        //루트 page (landing page)로 보낸다.
      } else {
        alert("update coin Error");
      }
    });

    //db update
  };

  return (
    <div>
      <StatusBar />
      <div className="con con1">
        <div className="container">
          <div className="profile_wrap">
            <p className="photo_box">
              <img src={imageCat} width="150px" hgt="300px" />
            </p>
            <ul className="cont_box __web-inspector-hide-shortcut__">
              <p className="name">문채원 (jeymemoon@gmail.com)</p>
              <li className="first">- 신분 : Provider</li>
              <li>- 소속 : 서강대학교</li>
              <li>
                - 받은쪽지(미확인/전체) : <strong>12</strong> / 13
              </li>
              <li>- 남은 토큰 : {userCoin}</li>
              <br />
            </ul>
          </div>
        </div>
      </div>
      <div className="con con1 con2">
        <div className="container">
          <div id="layerContent">
            <div className="head_title">진행 프로젝트</div>
            <form name="listForm" method="post" action="">
              <div className="bdCont">
                <div className="row">
                  <div className="board-search">
                    <fieldset>
                      <select
                        id="searchYear"
                        name="searchYear"
                        className="select"
                      >
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                      </select>
                      <select name="searchType">
                        <option value={1}>프로젝트</option>
                        <option value={2}>개설자</option>
                        <option value={3}>소속</option>
                      </select>
                      <input type="text" name="keyword" defaultValue />
                      <button className="searchBtn">
                        <img src="/2019/images/ico_search01.png" alt="" />
                      </button>
                    </fieldset>
                  </div>
                </div>
                <div className="mList">
                  <div className="projectlistbox_Wrap">
                    <div className="projectlistbox">
                      <ul>
                        <h4>
                          <p className="tit">
                            <a>
                              [20_HI002L] 대기업 실무자가 알려주는 신입/인턴도
                              칼퇴하는 방법!
                            </a>
                            <button onClick={handleAllowButton}>
                              수강 승인
                            </button>
                          </p>
                        </h4>
                        <li>- 김재호 </li>
                        <li>- 2020-05-13 ~ 2020-11-30</li>
                      </ul>
                      <div className="ingdiv">
                        <ul>
                          <li className="ing_icon01">진행</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="projectlistbox_Wrap">
                    <div className="projectlistbox">
                      <ul>
                        <h4>
                          <p className="tit">
                            <a
                              href="javascript:void(0);"
                              onclick="fn_egov_select_teamBlog('14347')"
                            >
                              [20_BJ102L] '쉬운'방법으로 있.어.보.이.는 '고퀄'
                              영상 만들기
                            </a>
                          </p>
                        </h4>
                        <li>- Prinsbin </li>
                        <li>- 2020-04-31 ~ 2020-05-03</li>
                      </ul>
                      <div className="ingdiv">
                        <ul>
                          <li className="ing_icon01">완료</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layer_wrap4">
                  <input
                    type="hidden"
                    name="satisfaction_projectSeq"
                    id="satisfaction_projectSeq"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    name="satisfaction_joinSeq"
                    id="satisfaction_joinSeq"
                    defaultValue
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Profile);
