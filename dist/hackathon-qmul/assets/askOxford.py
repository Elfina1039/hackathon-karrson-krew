# for more information on how to install requests
# http://docs.python-requests.org/en/master/user/install/#install
import random
import urllib.request as urllib2
import json
import sys

#inp=json.loads(sys.argv[1])


# TODO: replace with your own app_id and app_key
app_id = '92dcf993'
app_key = '5cb1c4207e79482646d71e4b8737297b'

language = 'en-gb'
word_id = "fabulous"

# url = 'https://od-api.oxforddictionaries.com:443/api/v1/inflections/' + language + '/' + word_id.lower()
url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/' + language + '/' + word_id.lower()
# url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower() + '/synonyms;antonyms'
# url = 'https://od-api.oxforddictionaries.com:443/api/v1/search/' + language + '?q=' + word_id.lower() + '&prefix=false'

#url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower() + '/sentences'

# url =  'https://od-api.oxforddictionaries.com:443/api/v1/stats/frequency/word/en/?corpus=nmc&lemma=test'

r = urllib2.Request(url, headers = {'app_id': app_id, 'app_key': app_key})
resp=urllib2.urlopen(r)


txt=resp.read()

print(txt)
#jsn=json.loads(txt)

#print (json.dumps(jsn, indent=4, sort_keys=True))