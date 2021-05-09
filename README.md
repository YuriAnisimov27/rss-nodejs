# Caesar cipher CLI tool

### Useful links

[Task description](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)

[Cross-check criteria](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/cross-check/caesar-cipher-cli-tool.md)

[Check-list](https://competent-hamilton-095abb.netlify.app/)

## Description

**CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

## How to use

### Installation

Clone (or download) this repo:

`git clone https://github.com/YuriAnisimov27/rss-nodejs.git -b caesar_cipher `

Install dependencies:

`cd rss-nodejs/caesar_cipher/ && npm i`

To run tests

`npm run test`

<hr/>

### Usage

Then you run my_caesar_cli with the following flags:

***required:***

-a or --action - an action to perform, either decode or encode. Throws an error otherwise.

-s or --shift - a shift by how many numbers to shift the alphabet, integers. Throws an error if the flag is omitted.

***optional:***

-i or --input - a text-file to read an input from. If the file is not found, an error is generated. If the flag is omitted, the input is read from the console. To stop the application use ctrl + c or control + c in MacOs. 

-o or --output - a text-file to write an output to. If the flag is specified and the file is not found, it will be created automatically at the specified path.  If the flag is omitted, the output is written to the console.


You can also:

`npm run help` to see how to use this CLI

`npm run test` to run tests

<hr/>

How it works:


App decode/encode data from source. If source or target file is not specified the data is read / output to the command line

<details>
		  <summary>Examples:</summary>
		  <p>

```
node my_caesar_cli --help
```

```
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

```
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

</p>
		</details>

in addition, the creation of the output file will occur if it does not exists
