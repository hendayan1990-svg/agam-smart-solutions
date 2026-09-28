from pathlib import Path
for name in ['gaming.html']:
    p=Path(r'D:\AGAM_SITE')/name
    s=p.read_text(encoding='utf-8')
    s=s.replace('<div class="logo-glow"><div class="sign">AGAM</div></div>','<div class="logo-glow"><img src="assets/agam-logo.svg" alt="AGAM"></div>')
    p.write_text(s,encoding='utf-8')
print('fixed custom logo')