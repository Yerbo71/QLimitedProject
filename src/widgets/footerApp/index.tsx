import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from '@/components/ui/footer';
const FooterApp = () => {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Shadcn</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Fake Pages</h3>
              <a href="/" className="text-sm text-muted-foreground">
                About
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Services
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Portfolio
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a
                href="https://www.linkedin.com/in/yerbolat-zhunisov-403595272"
                className="text-sm text-muted-foreground"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Yerbo71/QLimitedProject"
                target="_blank"
                className="text-sm text-muted-foreground"
              >
                Github
              </a>
              <a
                href="https://hh.kz/resume/ee959862ff09165cef0039ed1f36493133674b?from=share_ios"
                className="text-sm text-muted-foreground"
              >
                HeadHunter
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
};

export default FooterApp;
