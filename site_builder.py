from pathlib import Path
import urllib.request, ssl
R=Path(r'D:\AGAM_SITE'); A=R/'assets'; A.mkdir(parents=True,exist_ok=True)
CTX=ssl._create_unverified_context()
IDS={'network':442150,'cables':4508748,'fiber':4339335,'gaming':30469973,'camera':16423102,'router':28348054,'home':6020432,'rack':4682187,'switch':5050305,'patch':5658532,'lab':18471532}
for name,pid in IDS.items():
    out=A/f'{name}.jpg'
    if out.exists(): continue
    url=f'https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=1800'
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
        data=urllib.request.urlopen(req,context=CTX,timeout=30).read(); out.write_bytes(data); print('ok',name,len(data))
    except Exception as e: print('fail',name,e)
