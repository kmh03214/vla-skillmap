# Skill Map PoC 착수 체크리스트

이 파일의 수치와 계획은 제안이며 실험 결과가 아닙니다.

- [ ] 로봇·control mode·action 단위·좌표·joint order 확정
- [ ] VLA checkpoint SHA, 코드 commit, processor/scaler 기록
- [ ] 실제 LeRobot release/commit, meta/info.json, tasks 경로 확인
- [ ] camera/time sync와 episode/local frame UID registry audit
- [ ] session·object·retake grouping, ID/OOD split 고정
- [ ] atomic ontology, composite 관계, unknown와 failure 분리
- [ ] gold 독립 annotation, 합의율, boundary tolerance 확정
- [ ] VLM model/version, prompt hash, 미래 정보 사용 범위 기록
- [ ] annotation timer와 shared seed/gold fixed cost 분리
- [ ] inference call / action chunk / router module / denoise step 연결
- [ ] R0/R1/R2 예산·UI·teacher·gold·cost 통제
- [ ] online predictor에 미래 video/action/outcome 입력 차단
- [ ] skill conditioning의 oracle / wrong / missing 비교
- [ ] 실패 action BC filtering, correction/recovery validity mask
- [ ] 독립 rollout success 정의·초기 상태·seed·CI 고정
- [ ] release/canary/rollback과 old-skill regression gate 확정
