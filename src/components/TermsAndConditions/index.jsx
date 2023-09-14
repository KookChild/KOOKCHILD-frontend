import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const TermsAndConditions = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>상품안내</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>예금종류</h3>
            <div>정기적금</div>
            <h3>납입방법</h3>
            <div>
              해당 적금 서비스를 통해서만 입금가능하며, 그 외의 입금은 모두 제한
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>금리정보</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>기본금리</h3>
            <div>연 3.5%</div>
            <h3>중도해지금리</h3>
            <div>가입일에 당시 고시한 이 상품의 중도금리를 적용</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>기타사항</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3> 해지시 유의사항</h3>
            <ul style={{ padding: '20px' }}>
              <li>
                만기 전에 중도해지하는 경우 기본금리보다 낮은 중도해지금리 적용
              </li>
              <li>우대금리는 조건을 충족하고 만기 해지한 경우에만 제공</li>
              <li>
                질권, 압류 등 출금제한 사고신고가 등록된 경우에는 해지 불가
              </li>
            </ul>
            <h3> 기타 유의사항</h3>
            <ul style={{ padding: '20px' }}>
              <li>양도에 의한 명의변경 불가</li>
              <li>
                상속에 의한 명의변경 가능(단, 상속인이 국민은행 계좌를 보유한
                경우에 한함)
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>상품설명서 및 이용약관</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ padding: '20px' }}>
              <li>예금거래기본약관</li>
              <li>적립식예금약관</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
