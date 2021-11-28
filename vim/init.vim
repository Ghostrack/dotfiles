set relativenumber

set ignorecase
set smartcase

set nowrap

set autoindent
set smartindent

set sidescroll=1
set tabstop=4
set softtabstop=4
set noexpandtab
set shiftwidth=4

set updatetime=300
set completeopt=noinsert,menuone,noselect

set undofile " Maintain undo history between sessions
set undodir=~/.vim/undodir

set nocompatible
set cmdheight=2
set signcolumn=number

if (has("termguicolors"))
  set termguicolors
endif

let g:auto_save = 1

let g:ale_disable_lsp = 1
let g:ale_php_cs_fixer_options = '--config=/home/fran/.php_cs'
let g:ale_php_phan_executable = expand('~/vendor/bin/phan_client')
let g:ale_php_phan_use_client = 1

let g:lightline = {'colorscheme' : 'forest_night'}

let g:phpactorPhpBin = 'php'

let g:NERDTreeShowHidden=1

let g:SuperTabDefaultCompletionType = '<C-n>'

let g:forest_night_enable_italic = 1
let g:forest_night_disable_italic_comment = 1

let g:vista_default_executive = 'coc'
let g:vista#renderer#enable_icon = 1
let g:vista_icon_indent = ["╰─▸ ", "├─▸ "]
let g:vista_fzf_preview = ['right:50%']

let g:coc_snippet_next = '<c-j>'
let g:coc_snippet_prev = '<c-k>'
let g:coc_snippet_next = '<tab>'

inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>
inoremap [ []<left>
inoremap { {}<left>
inoremap {<CR> {<CR>}<ESC>O
inoremap {;<CR> {<CR>};<ESC>O

inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm() : "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

nnoremap <c-s> :CocCommand fzf-preview.FromResources project_mru git<cr>
nnoremap <C-G> :CocCommand fzf-preview.GitStatus<cr>
nnoremap <C-B> :CocCommand fzf-preview.Buffers<cr>
nnoremap <C-L> :CocCommand fzf-preview.Lines --add-fzf-arg=--no-sort --add-fzf-arg=--query="'"<cr>

nnoremap <C-T> :Vista finder coc<cr>
nnoremap <Leader>t :Vista!!<cr>

map <C-n> :NERDTreeToggle<CR>

nmap <silent> <C-k> <Plug>(ale_previous_wrap)
nmap <silent> <C-j> <Plug>(ale_next_wrap)

imap <C-l> <Plug>(coc-snippets-expand)
imap <C-j> <Plug>(coc-snippets-expand-jump)
vmap <C-j> <Plug>(coc-snippets-select)

command! -bang -nargs=* Ag call fzf#vim#ag(<q-args>, {'options': '--delimiter : --nth 4..'}, <bang>0)

autocmd BufEnter * :syntax sync fromstart

call plug#begin('~/nvim/plugged')

Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'tpope/vim-fugitive' | Plug 'mhinz/vim-signify'
Plug 'dense-analysis/ale'
Plug '907th/vim-auto-save'
Plug 'itchyny/lightline.vim'
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'scrooloose/nerdcommenter'
Plug 'roxma/nvim-yarp'
Plug 'honza/vim-snippets'
Plug 'phpactor/phpactor' ,  {'do': 'composer install', 'for': 'php'}
Plug 'sheerun/vim-polyglot'
Plug 'ervandew/supertab'
Plug 'mattn/emmet-vim'
Plug 'sainnhe/gruvbox-material'
Plug 'posva/vim-vue'
Plug 'kshenoy/vim-signature'
Plug 'psliwka/vim-smoothie'
Plug 'liuchengxu/vista.vim'
Plug 'sainnhe/sonokai'
Plug 'yuki-ycino/fzf-preview.vim', { 'branch': 'release/rpc', 'do': ':UpdateRemotePlugins' }
Plug 'rayburgemeestre/phpfolding.vim'
Plug 'liuchengxu/vim-clap', { 'do': ':Clap install-binary' }
Plug 'vim-vdebug/vdebug'

call plug#end()

syntax on

set background=dark
colorscheme sonokai

silent! helptags ALL
