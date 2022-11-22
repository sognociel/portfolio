import React from "react";
import "../../css/Sections/CareerAndEdu.css";

const Education = () => {
  return (
    <div id="edu">
      <div className="fixed-border"></div>
      <h2>EDUCATION</h2>

      <div className="edu_container">
        <div className="edu_content">
          <div className="edu__name">SeSAC 프론트엔드 실무 프로젝트 과정</div>
          <div className="edu__date">
            2022. 10
            <br /> ~ <br />
            2023. 01
          </div>
          <div className="edu__info">
            HTML & CSS
            <br />
            JavaScript
            <br />
            React
            <br />
            TypeScript
          </div>
        </div>
      </div>

      <div className="edu_container">
        <div className="edu_content">
          <div className="edu__name">
            머신러닝 및 딥러닝을 위한 빅데이터 분석
            전문가&#40;빅데이터큐레이션&#41;
            <br />
            더조은영상아카데미학원
          </div>
          <div className="edu__date">
            2019. 04
            <br /> ~ <br />
            2019. 08
          </div>
          <div className="edu__info">
            응용SW 기초기술 활용
            <br />
            프로그래밍 언어활용
            <br />
            통계 기반 데이터 분석
            <br />
            머신러닝 기반 데이터 분석
            <br />
            텍스트 데이터 분석
            <br />
            탐색적 데이터 분석
            <br />
            빅데이터 분석 결과 시각화
            <br />
            분석용 데이터 구축
            <br />
            빅데이터 수집시스템 개발
            <br />
            빅데이터 저장시스템 개발
            <br />
            빅데이터 처리시스템 개발
            <br />
            빅데이터 분석시스템 개발
            <br />
            빅데이터 플랫폼 테스트
            <br />
            파이썬과 텐서플로
            <br />
            빅데이터 프로젝트
            <br />
          </div>
        </div>
      </div>

      <div className="edu_container">
        <div className="edu_content">
          <div className="edu__name">
            군마현립여자대학
            <br />
            群馬県立女子大学
            <br />
          </div>
          <div className="edu__date">
            2015. 09
            <br /> ~ <br />
            2016. 08
          </div>
          <div className="edu__info">
            교환학생 과정을 통해 일어일문학에 대한 교육 이수 및 일본 문화체험,
            회화 능력 향상
          </div>
        </div>
      </div>

      <div className="edu_container">
        <div className="edu_content">
          <div className="edu__name">고려대학교</div>
          <div className="edu__date">
            2013. 03
            <br /> ~ <br />
            2018. 02
          </div>
          <div className="edu__info">경영정보학 및 일어일문학</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
