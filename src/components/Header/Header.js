import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../ButtonPrimary";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo></Logo>
        <Column>
          <Button>SUBSCRIBE</Button>
          <ButtonSecondary>
            <i>Already a subscriber?</i>
          </ButtonSecondary>
        </Column>
      </DesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: end;
  align-self: end;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const ButtonSecondary = styled(Button)`
  background: none;
  color: var(--color-gray-900);
  font-family: var(--font-family-serif);
  text-transform: none;
  text-decoration: underline;
  font-weight: var(--font-weight-normal);
  font-size: 14px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  justify-content: center;
`;

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;
  margin-bottom: 72px;
  margin-top: 16px;

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-evenly;
  }
`;

export default Header;
