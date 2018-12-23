import React from 'react'
import styled from 'styled-components'
import { contactEmail, contactFacebook, contactGithub, contactYoutube } from '../assets/images'

const Footer: React.FunctionComponent = () => (
  <Wrapper>
    <Heading>Wanna Join to Mash-Up?</Heading>
    <Paragraph>
      <strong>매년 상,하반기 2번 신입 기수 모집</strong>
    </Paragraph>
    <Paragraph>질문 사항 및 리크루트 소식은 아래 4가지 방법으로 확인해주세요.</Paragraph>
    <Address>
      <ContactList>
        <ContactItem backgroundUrl={contactYoutube}>
          <Anchor href="https://www.youtube.com/channel/UCuEebIHD_qwAUpgYZICvRQQ" target="_blank">
            Youtube
          </Anchor>
        </ContactItem>
        <ContactItem backgroundUrl={contactFacebook}>
          <Anchor href="https://www.facebook.com/mashupgroup/" target="_blank">
            Facebook
          </Anchor>
        </ContactItem>
        <ContactItem backgroundUrl={contactEmail}>
          <Anchor href="mailto:" target="_blank">
            Email
          </Anchor>
        </ContactItem>
        <ContactItem backgroundUrl={contactGithub}>
          <Anchor href="https://github.com/mash-up-kr" target="_blank">
            Github
          </Anchor>
        </ContactItem>
      </ContactList>
    </Address>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  padding: 0 2rem;
`

const Heading = styled.h2`
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 900;
  line-height: 1.5;
`

const Paragraph = styled.p`
  color: #fff;
  font-size: 0.7rem;
  line-height: 1.8;
`

const Address = styled.address``

const ContactList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

const ContactItem = styled.li`
  background: url(${({ backgroundUrl }: { backgroundUrl: string }) => backgroundUrl}) no-repeat;
`

const Anchor = styled.a`
  display: block;
  overflow: hidden;
  width: 60px;
  height: 60px;
  padding-top: 60px;
`
