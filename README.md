# VLA Skill Map

VLA Skill Map의 연구 방향, LeRobot v3 데이터 구조, semi-supervised labeling 데이터 엔진, 상위 VLM/Agent 연결과 PoC 계획을 정리한 한국어 웹 리포트입니다.

## Web report

배포 완료 후 프로젝트 사이트: https://kmh03214.github.io/vla-skillmap/

주제별 11페이지: 요약, 계획 검토, 데이터 구조, 자가발전 파이프라인, 연구 트렌드, Agent 연결, 최종 아키텍처 구성도, 로드맵, 4주 PoC, 후속 실험, 출처·실행 자료.

최종 아키텍처 구성도: https://kmh03214.github.io/vla-skillmap/architecture.html

`docs/downloads/`에는 제안 schema·skill contract·실험 manifest·착수 체크리스트가 있습니다.

## Preview

`docs/index.html`을 브라우저에서 열거나 아래 명령을 사용합니다.

```sh
python -m http.server 8000 --directory docs
```

HTML/CSS/JavaScript만 사용하는 정적 사이트이며 별도 build dependency가 없습니다. 내부 링크는 상대 경로이므로 `/vla-skillmap/` 아래에서도 동작합니다.

## GitHub Pages

Repository Settings → Pages에서 **Deploy from a branch**, **main**, **/docs**를 선택합니다. `.nojekyll`로 정적 파일을 그대로 배포합니다.

## Research scope

검토 기준일: 2026-10-09. 보고서의 roadmap·수치 목표·schema는 연구 제안이며, 실제 model training 또는 robot rollout의 실험 결과가 아닙니다. Primary sources는 리포트의 Sources 페이지에서 확인할 수 있습니다.
