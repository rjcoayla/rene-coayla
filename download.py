import urllib.request, re, os, shutil

os.makedirs('assets', exist_ok=True)

urls = [
    'https://www.linkedin.com/feed/update/urn:li:activity:7431547722601766912/',
    'https://www.linkedin.com/feed/update/urn:li:activity:7431225727770923008/',
    'https://www.linkedin.com/feed/update/urn:li:activity:6910640497325658112/'
]

filenames = ['assets/linkedin_port_control.jpg', 'assets/linkedin_electoral.jpg', 'assets/linkedin_logistics.jpg']

for url, filename in zip(urls, filenames):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'property="og:image"\s+content="([^"]+)"', html)
        if match:
            img_url = match.group(1)
            img_url = img_url.replace('&amp;', '&')
            urllib.request.urlretrieve(img_url, filename)
            print(f'Downloaded {filename}')
        else:
            print(f'No og:image found for {url}')
    except Exception as e:
        print(f'Error on {url}: {e}')

# Copy generated images to assets
import glob
generated = glob.glob(r'C:\Users\USER\.gemini\antigravity\brain\2db6d154-3273-469e-b60d-4e59bbb7caf7\*.png')
for g in generated:
    if 'data_consulting' in g or 'dashboard_design' in g or 'process_optimization' in g or 'applied_ai' in g or 'strategic_diagnosis' in g:
        shutil.copy(g, os.path.join('assets', os.path.basename(g)))
        print(f'Copied {os.path.basename(g)}')
