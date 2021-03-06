import React, { Component, useEffect } from "react";
import "../../css/styles.css";
import { withRouter } from "react-router-dom";
import StatusBar from "../StatusBar/StatusBar";
import Comment from "../comment/comment";

function course_information(props){
      return (
          <div>
                <StatusBar />
        <main className="container container_body mgothic">
          <div className="col-lg-9 col-xs-12 mobile-padding table-padding">
            <div className="post_element header"><a href="course_board.html">
                게시판</a>
            </div>
            <div className="post-element comment-header">
              <div className="board-title" style={{paddingTop: '6px', paddingLeft: '10px'}}>나만의 악세사리 만들기(2개) 레진공예</div>
              <br />
              <div className="small_container" style={{paddingLeft: '10px'}}>
                <div className="board-user">윤정은 | </div>
                <div className="board-hits">
                  가격 15,000 |
                </div>
                <div className="board-date row mobile-hide">2020/07/30 11:52</div>
                <div className="board-content mverdana" style={{maxWidth: '100%', height: 'auto'}}>
                  그림과 공예를 하고 있는 작가입니다
                  <div><br /></div>
                  <div>
                    어릴때 부터 그림을 그리고 손으로 만드는것을 좋아했습니다. 작은 소품들이나 악세사리들을
                    만드는것을 특히 좋아해서, 만든것들 선물하는 것이 취미입니다 ^^
                  </div>
                  <div><br /></div>
                  <p>
                    <font size={5}>수업소개</font><br /><br />
                    수업 소개드려요 ♡ <br />◆ 레진공예 - 세상 하나뿐인 악세사리 만들기 ◆ <br />레진은
                    투명하고 점성있는 액체로, 굳으면 플라스틱 처럼 단단해지고 변형이 없는 공예 재료
                    입니다. 원하는 모양으로 얼마든지 다양하게 악세사리를 만드실수 있어요. 레진을 처음 접해
                    보시는 분도, 손재주가 없다고 생각하시는분도 걱정하지 않으셔도 되요. 레진공예는 많이
                    어렵지 않고, 알면 너무나 재밌는 작업 이예요 ♪<br />
                    수강생분들의 만족도가 정~말 높은 수업 입니다. 한번해보신 분들은 정말 재밌어 하시고,
                    다시 또 찾기도 많이 합니다.
                  </p>
                  <br />
                  <br />
                  <p>
                    <font size={5}>수업대상</font><br /><br />
                    + 악세사리를 직접 만들어 착용하시거나, 선물 하고싶으신 분들 <br />+ 손으로 무언가
                    꼼지락 꼼지락, 집중하고 싶으신 분들 <br />+ 친구 or 연인과 함께, 새로운 취미생활 /
                    이색 데이트 해보고 싶으실때 <br />+ 레진에 관심있고, 쉽게 접해보고 싶으신 분들 ** 어느
                    누구에게나 활짝 열려 있습니다. 환영해요 :) ** ( 나도 몰랐던 재능을 발견 하실수도
                    있어요!! ♪ )
                  </p>
                  <p>
                    수업대상 + 악세사리를 직접 만들어 착용하시거나, 선물 하고싶으신 분들 + 손으로 무언가
                    꼼지락 꼼지락, 집중하고 싶으신 분들 + 친구 or 연인과 함께, 새로운 취미생활 / 이색
                    데이트 해보고 싶으실때 + 레진에 관심있고, 쉽게 접해보고 싶으신 분들 ** 어느 누구에게나
                    활짝 열려 있습니다. 환영해요 :) ** ( 나도 몰랐던 재능을 발견 하실수도 있어요!! ♪ )<br /><br />
                  </p>
                  <p>
                    <font size={5}>강의계획</font><br /><br />[ 레진공예 악세사리 원데이 클래스 ] <br />♦︎
                    구성 : 총 2개 만드는 수업입니다. [귀걸이. 목걸이. 팔찌. 반지, 브로치] 중 2개 선택
                    <br />★ 재료비 별도 입금 입니다 : 20.000 원 수업 신청 주시면, 승인후, 입금계좌 안내
                    드려요 :) <br />*갯수 추가 가능 합니다 (추가 할인)* <br />♦︎ 소요시간 : 1시간 내외 (
                    재료 조합 속도에 따라 개인차가 발생 합니다 ) <br />♦︎ 날짜/시간 : 평일 : 2시 ~ 9시
                    주말 : 12시 ~ 9시 <br />♦︎ 게시된 일정 외에도 수업 가능합니다. 편하게 문의 주시고,
                    신청 후, 원하시는 날짜/시간 말씀해주시면 거의 맞추어 수업 진행 합니다 ^^ <br />♦︎ 장소
                    : 신사동 / 가로수길 위치한, 개인 공방카페 입니다 <br /><br />◆ 수업 내용 - 레진의 기본 설명
                    - 만드실 작품의 몰드와 소재 선정 / 원하는 느낌 찾기 - 악세사리 만들기 (함께 하면서,
                    설명과 도움 계속 드립니다 :) - 완성후 촬영 타임 - 만드신 악세사리는 예쁘게 담아 드려요
                    ♡
                  </p>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div>
                <Comment />
                <div className="comment-number">댓글 : 3개</div>         
              </div>
              <div className="post-element comments_area">
                <div id="comments_area_html">
                  <hr />
                  <div className="comment" id="comments_123&quot;">
                    <input type="hidden" name="comments_num" defaultValue="123&quot;" />
                    <input type="hidden" name="comments_depth" defaultValue={0} />
                    <div className="comment-header">
                      <div className="comment-user">
                        문채원
                      </div>                
                      <div className="comment-remove"><div className="remove1" style={{cursor: 'hand'}}>
                        </div>
                        <div className="remove2" style={{display: 'none'}}>
                          <div className="reply_comments_button" style={{display: 'inline-block'}}>                        
                            <button className="reply_comment" style={{border: 0, background: 'transparent'}} value={6400674} />
                          </div>
                          <button className="btn" value={6400674} onclick="report_comment(6400674);return false;" style={{backgroundColor: '#fff', display: 'inline-block', cursor: 'hand', fontSize: '17px'}} />                         
                        </div>
                      </div>
                    </div>
                    <div className="mverdana comment-content">지원 희망합니다</div>
                  </div>
                </div>
              </div>
              <div className="post-element comments_area">
                <div id="comments_area_html">
                  <hr />
                  <div className="comment" id="comments_123&quot;">
                    <input type="hidden" name="comments_num" defaultValue="123&quot;" />
                    <input type="hidden" name="comments_depth" defaultValue={0} />
                    <div className="comment-header">
                      <div className="comment-user">
                        임유선
                      </div>   
                      <div className="comment-remove"><div className="remove1" style={{cursor: 'hand'}}>
                        </div>
                        <div className="remove2" style={{display: 'none'}}>
                          <div className="reply_comments_button" style={{display: 'inline-block'}}>                   
                            <button className="reply_comment" style={{border: 0, background: 'transparent'}} value={6400674} />
                          </div>
                          <button className="btn" value={6400674} onclick="report_comment(6400674);return false;" style={{backgroundColor: '#fff', display: 'inline-block', cursor: 'hand', fontSize: '17px'}} />
                        </div>
                      </div>
                    </div>
                    <div className="mverdana comment-content">글에 문제가 있네요 ㅡ.ㅡ
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-element comments_area">
                <div id="comments_area_html">
                  <hr />
                  <div className="comment" id="comments_123&quot;" style={{}}>
                    <input type="hidden" name="comments_num" defaultValue="123&quot;" />
                    <input type="hidden" name="comments_depth" defaultValue={0} />
                    <div className="comment-header">
                      <div className="comment-user">
                        임유선
                      </div>
                      <div className="comment-remove"><div className="remove1" style={{cursor: 'hand'}}>
                        </div>
                        <div className="remove2" style={{display: 'none'}}>
                          <div className="reply_comments_button" style={{display: 'inline-block'}} />      
                          <button className="reply_comment" style={{border: 0, background: 'transparent'}} value={6400674} />
                        </div>                         
                        <button className="btn" value={6400674} onclick="report_comment(6400674);return false;" style={{backgroundColor: '#fff', display: 'inline-block', cursor: 'hand', fontSize: '17px'}} />
                      </div>
                    </div>
                  </div>
                  <div className="mverdana comment-content">정말 끝까지 함께 하나요??
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        </div>
      );
 }

 export default withRouter(course_information);
