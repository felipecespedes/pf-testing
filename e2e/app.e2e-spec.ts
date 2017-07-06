import { PortalFinancePage } from './app.po';

describe('portal-finance App', () => {
  let page: PortalFinancePage;

  beforeEach(() => {
    page = new PortalFinancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
